import bank from './generated/questions.json';
import { createQuestionSearch } from './search';

export { bank };
export const modules = { basics: '基础知识', design: '内容设计' };
export const types = { judge: '判断题', single: '单选题' };
export const modes = { practice: '专项练习', wrong: '错题本', saved: '收藏' };
export const storageKey = 'lingjing-quiz-v1';

const byId = new Map(bank.map(question => [question.id, question]));
const fresh = () => ({
  version: 1, records: {}, bookmarks: {}, positions: {}, module: 'basics', type: 'judge',
});
const position = ({ module, type }) => module + '-' + type;

export function validateProgress(raw) {
  if (raw?.version !== 1) throw Error('版本不匹配');
  const clean = fresh();
  if (Object.hasOwn(modules, raw.module)) clean.module = raw.module;
  if (Object.hasOwn(types, raw.type)) clean.type = raw.type;
  for (const question of bank) {
    const record = raw.records?.[question.id];
    if (record && question.options.some(option => option.key === record.key) && Number.isFinite(record.at)) {
      clean.records[question.id] = { key: record.key, at: record.at };
    }
    const bookmark = raw.bookmarks?.[question.id];
    if (bookmark && typeof bookmark.on === 'boolean' && Number.isFinite(bookmark.at)) {
      clean.bookmarks[question.id] = { on: bookmark.on, at: bookmark.at };
    }
  }
  for (const module of Object.keys(modules)) {
    for (const type of Object.keys(types)) {
      const key = position({ module, type });
      const question = byId.get(raw.positions?.[key]);
      if (question?.module === module && question.type === type) clean.positions[key] = question.id;
    }
  }
  return clean;
}

export function answerStatus(question, record) {
  if (!record) return '';
  if (question.answer.length > 1) return 'review';
  return question.answer.includes(record.key) ? 'good' : 'bad';
}

export function group({ progress }) {
  return bank.filter(question => question.module === progress.module && question.type === progress.type);
}

export const searchQuestions = createQuestionSearch(bank, types);

export function matches({ progress, mode, unanswered }, question) {
  const record = progress.records[question.id];
  if (mode === 'wrong') return answerStatus(question, record) === 'bad';
  if (mode === 'saved') return Boolean(progress.bookmarks[question.id]?.on);
  return !unanswered || !record;
}

function go(session, current) {
  let { progress } = session;
  const key = position(progress);
  if (session.mode === 'practice' && current && progress.positions[key] !== current) {
    progress = { ...progress, positions: { ...progress.positions, [key]: current } };
  }
  return { ...session, progress, current, selected: null, retry: false, focusFeedback: false, focusQuestion: false };
}

function resume(session) {
  const { progress, mode } = session;
  const candidates = group(session).filter(question => matches(session, question));
  const last = mode === 'practice' && candidates.find(question => question.id === progress.positions[position(progress)]);
  const first = candidates.find(question => !progress.records[question.id]);
  return go(session, last?.id ?? first?.id ?? candidates[0]?.id ?? null);
}

export function initialSession() {
  let progress = fresh();
  let readError = false;
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) progress = validateProgress(JSON.parse(saved));
  } catch {
    readError = true;
  }
  return resume({ progress, readError, mode: 'practice', unanswered: false });
}

function mergeProgress(progress, imported) {
  const merged = { ...imported, positions: { ...progress.positions, ...imported.positions } };
  for (const field of ['records', 'bookmarks']) {
    merged[field] = { ...progress[field] };
    for (const [id, item] of Object.entries(imported[field])) {
      if (!merged[field][id] || item.at > merged[field][id].at) merged[field][id] = item;
    }
  }
  return merged;
}

export function quizReducer(session, action) {
  const { progress, current, selected, retry } = session;
  const question = byId.get(current);
  const result = !retry && progress.records[current];
  switch (action.type) {
    case 'mode':
      return resume({ ...session, mode: action.value });
    case 'module':
    case 'type':
      return resume({ ...session, progress: { ...progress, [action.type]: action.value } });
    case 'unanswered':
      return resume({ ...session, unanswered: action.value });
    case 'show-all':
      return resume({ ...session, mode: 'practice', unanswered: false });
    case 'go':
      return go(session, action.id);
    case 'search-result': {
      const target = byId.get(action.id);
      if (!target) return session;
      const next = go({
        ...session, mode: 'practice', unanswered: false,
        progress: { ...progress, module: target.module, type: target.type },
      }, target.id);
      return { ...next, focusQuestion: true };
    }
    case 'pick':
      if (result || !question?.options.some(option => option.key === action.key)) return session;
      return { ...session, selected: action.key };
    case 'submit':
      if (!question || !selected || result) return session;
      return {
        ...session,
        progress: { ...progress, records: { ...progress.records, [current]: { key: selected, at: action.at } } },
        retry: false,
        focusFeedback: true,
      };
    case 'retry':
      return { ...session, selected: null, retry: action.value, focusFeedback: false };
    case 'bookmark':
      if (!question) return session;
      return {
        ...session,
        progress: {
          ...progress,
          bookmarks: { ...progress.bookmarks, [current]: { on: !progress.bookmarks[current]?.on, at: action.at } },
        },
      };
    case 'import':
      return resume({ ...session, progress: mergeProgress(progress, action.value) });
    case 'reset-progress':
      return resume({
        ...session, mode: 'practice', unanswered: false,
        progress: { ...fresh(), bookmarks: action.clearBookmarks ? {} : progress.bookmarks },
      });
    default:
      return session;
  }
}
