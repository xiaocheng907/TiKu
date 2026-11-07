import { bank } from './quiz';

export const examStorageKey = 'jiege-mock-exam-v1';
export const examDuration = 90 * 60 * 1000;
const byId = new Map(bank.map(question => [question.id, question]));

function shuffled(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function createExam(now = Date.now()) {
  const questions = ['single', 'judge'].flatMap(type => {
    const count = type === 'single' ? 40 : 10;
    const pool = bank.filter(question => question.type === type && question.answer.length === 1);
    if (pool.length < count) throw Error('可用题目不足，无法组卷。');
    return shuffled(pool).slice(0, count).map(question => question.id);
  });
  return { version: 1, questions, answers: {}, index: 0, startedAt: now, deadline: now + examDuration, finishedAt: null };
}

export function validateExam(raw) {
  if (raw?.version !== 1 || !Array.isArray(raw.questions) || raw.questions.length !== 50 ||
    new Set(raw.questions).size !== 50 || !Number.isFinite(raw.startedAt) ||
    raw.deadline !== raw.startedAt + examDuration ||
    !Number.isInteger(raw.index) || raw.index < 0 || raw.index >= 50 ||
    !(raw.finishedAt === null || Number.isFinite(raw.finishedAt) &&
      raw.finishedAt >= raw.startedAt && raw.finishedAt <= raw.deadline)) return null;
  const questions = raw.questions.map(id => byId.get(id));
  if (questions.some((question, index) => !question || question.answer.length !== 1 ||
    question.type !== (index < 40 ? 'single' : 'judge'))) return null;
  const answers = {};
  for (const question of questions) {
    const key = raw.answers?.[question.id];
    if (question.options.some(option => option.key === key)) answers[question.id] = key;
  }
  return {
    version: 1, questions: [...raw.questions], answers, index: raw.index,
    startedAt: raw.startedAt, deadline: raw.deadline, finishedAt: raw.finishedAt,
  };
}

export function loadExam() {
  try {
    const raw = localStorage.getItem(examStorageKey);
    const exam = raw && validateExam(JSON.parse(raw));
    if (exam && exam.finishedAt === null && Date.now() >= exam.deadline) {
      return { ...exam, finishedAt: exam.deadline };
    }
    return exam || null;
  } catch {
    return null;
  }
}

export function examReducer(exam, action) {
  switch (action.type) {
    case 'start':
      return action.exam;
    case 'clear':
      return null;
    case 'go':
      return exam && action.index >= 0 && action.index < 50 ? { ...exam, index: action.index } : exam;
    case 'pick': {
      if (!exam || exam.finishedAt !== null || action.at >= exam.deadline) return exam;
      const question = byId.get(exam.questions[exam.index]);
      if (!question.options.some(option => option.key === action.key)) return exam;
      return { ...exam, answers: { ...exam.answers, [question.id]: action.key } };
    }
    case 'finish':
      if (!exam || exam.finishedAt !== null) return exam;
      return { ...exam, finishedAt: Math.min(Math.max(action.at, exam.startedAt), exam.deadline) };
    default:
      return exam;
  }
}

export function examQuestions(exam) {
  return exam.questions.map(id => byId.get(id));
}

export function examScore(exam) {
  return examQuestions(exam).filter(question => question.answer[0] === exam.answers[question.id]).length * 2;
}
