import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const modules = [
  ['basics', '基础知识', '基础知识-135题.md', 135, 54],
  ['design', '内容设计', '内容设计初级-409题.md', 409, 173],
];

function plain(text) {
  return text.trim()
    .replace(/\\([_*\[\]"\\])/g, '$1')
    .replace(/[ \t]*[\r\n\u2028\u2029]+[ \t]*/g, (wrap, offset, source) => {
      // Keep a word separator between Latin tokens, and rejoin wrapped Chinese text.
      const before = source[offset - 1] ?? '';
      const after = source[offset + wrap.length] ?? '';
      return /[a-z0-9]/i.test(before) && /[a-z0-9]/i.test(after) ? ' ' : '';
    });
}

const bank = modules.flatMap(([module, title, file, expected, singles]) => {
  const source = readFileSync(new URL('../' + file, import.meta.url), 'utf8').replace(/\r\n/g, '\n');
  const starts = [...source.matchAll(/^(?:### 第 (\d+) 题[ \t]*\n|第(\d+)题)/gm)];
  const questions = starts.map((start, i) => {
    const number = Number(start[1] || start[2]);
    const end = starts[i + 1]?.index ?? source.length;
    const block = source.slice(start.index + start[0].length, end).split(/^## /m)[0];
    const answerStart = block.indexOf('**参考答案');
    const explanationStart = block.indexOf('**解析');
    if (answerStart < 0 || explanationStart < answerStart) throw Error('缺少答案或解析 ' + file + ' #' + number);
    // Rejoin Unity3D where the Markdown line wrap mimics an option label.
    let choices = block.slice(0, answerStart).replace(/Unity3\s*\n\s*D、/g, 'Unity3D、');
    if (module === 'design' && [95, 408].includes(number)) {
      choices = choices.replace(/PS\s*\n\s*D、PD\s*\n\s*D、TIF/g, 'PSD、PDD、TIF');
    }
    const labels = [...choices.matchAll(/^([A-D])、/gm)];
    const prompt = plain(choices.slice(0, labels[0]?.index));
    const options = labels.map((label, j) => ({
      key: label[1],
      text: plain(choices.slice(label.index + label[0].length, labels[j + 1]?.index)),
    }));
    const answer = block.slice(answerStart, explanationStart).match(/^\*\*参考答案(?:：|\*\*\s*)([A-D](?:、[A-D])*)/)?.[1].split('、');
    const explanation = plain(block.slice(explanationStart).replace(/^\*\*解析(?:：|\*\*\s*)/, '').trim().replace(/\*\*$/, ''));
    const type = options.length === 2 && options.every(o => /^(正确|错误)$/.test(o.text)) ? 'judge' : 'single';
    if (!prompt || !explanation || ![2, 4].includes(options.length) || options.some(o => !o.text) ||
        new Set(options.map(o => o.key)).size !== options.length || !answer || answer.some(key => !options.some(o => o.key === key))) {
      throw Error('题目结构异常 ' + file + ' #' + number);
    }
    return { id: module + '-' + number, module, title, number, type, prompt, options, answer, explanation };
  });
  if (questions.length !== expected || new Set(questions.map(q => q.number)).size !== expected ||
      questions.some(q => q.number < 1 || q.number > expected) ||
      questions.filter(q => q.type === 'single').length !== singles) {
    throw Error('题库题量、题号或题型异常 ' + file);
  }
  return questions.sort((a, b) => a.number - b.number);
});

const output = new URL('./src/generated/', import.meta.url);
mkdirSync(output, { recursive: true });
writeFileSync(new URL('questions.json', output), JSON.stringify(bank));
console.log('已生成 ' + bank.length + ' 道题。');
