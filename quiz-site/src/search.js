function normalize(text) {
  return text.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
}

// Match against a substring, allowing insertions, deletions, substitutions and adjacent swaps.
function substringDistance(query, text, maxDistance) {
  if (query.length > text.length + maxDistance) return maxDistance + 1;
  let previous = new Uint16Array(text.length + 1);
  let beforePrevious = previous;
  for (let i = 1; i <= query.length; i++) {
    const current = new Uint16Array(text.length + 1);
    current[0] = i;
    let minimum = i;
    for (let j = 1; j <= text.length; j++) {
      current[j] = Math.min(
        previous[j] + 1,
        current[j - 1] + 1,
        previous[j - 1] + Number(query[i - 1] !== text[j - 1]),
      );
      if (i > 1 && j > 1 && query[i - 1] === text[j - 2] && query[i - 2] === text[j - 1]) {
        current[j] = Math.min(current[j], beforePrevious[j - 2] + 1);
      }
      minimum = Math.min(minimum, current[j]);
    }
    if (minimum > maxDistance) return maxDistance + 1;
    beforePrevious = previous;
    previous = current;
  }
  return Math.min(...previous);
}

export function createQuestionSearch(bank, types) {
  const entries = bank.map(question => ({
    question,
    fields: [
      { text: normalize(question.prompt), weight: 1 },
      ...question.options.map(option => ({ text: normalize(option.text), weight: 0.85 })),
      { text: normalize(question.title), weight: 0.7 },
      { text: normalize(types[question.type]), weight: 0.7 },
      { text: normalize(String(question.number)), weight: 1 },
      { text: normalize(question.id), weight: 0.7 },
    ],
  }));

  return function searchQuestions(query) {
    const terms = query.trim().split(/\s+/u).map(normalize).filter(Boolean);
    if (!terms.length) return [];
    const phrase = terms.join('');
    const totalLength = terms.reduce((sum, term) => sum + term.length, 0);
    const ranked = entries.map(({ question, fields }) => {
      let matchedLength = 0;
      let relevance = 0;
      let exactTerms = 0;
      for (const term of terms) {
        const exact = fields.filter(field => field.text.includes(term));
        if (exact.length) {
          matchedLength += term.length;
          relevance += term.length * Math.max(...exact.map(field => field.weight));
          exactTerms++;
          continue;
        }
        // Single characters and pure numbers need an exact match to avoid noisy results.
        if (term.length < 2 || /^\d+$/u.test(term)) continue;
        const allowedEdits = Math.min(4, Math.max(1, Math.floor(term.length * 0.25)));
        let similarity = 0;
        let weightedSimilarity = 0;
        for (const field of fields) {
          const distance = substringDistance(term, field.text, allowedEdits);
          if (distance > allowedEdits) continue;
          const value = 1 - distance / term.length;
          similarity = Math.max(similarity, value);
          weightedSimilarity = Math.max(weightedSimilarity, value * field.weight);
        }
        matchedLength += similarity * term.length;
        relevance += weightedSimilarity * term.length;
      }
      const coverage = matchedLength / totalLength;
      const threshold = phrase.length === 2 ? 0.5 : 0.6;
      if (coverage < threshold) return { question, score: 0 };
      const phraseWeight = Math.max(0, ...fields
        .filter(field => field.text.includes(phrase))
        .map(field => field.weight * (field.text === phrase ? 1.5 : 1)));
      // Complete matches come first, followed by typo-tolerant matches and partial keywords.
      const score = Number(exactTerms === terms.length) * 4 +
        phraseWeight * 2 + relevance / totalLength;
      return { question, score };
    });
    return ranked.filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(result => result.question);
  };
}
