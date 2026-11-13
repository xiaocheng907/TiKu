import { useEffect, useEffectEvent, useMemo, useReducer, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  answerStatus, bank, group, initialSession, matches, modes, modules, quizReducer,
  searchQuestions, storageKey, types, validateProgress,
} from './quiz';
import './style.css';
import { ExamSetup, MockExam, useMockExam } from './MockExam';

const feedbackLabels = {
  good: '回答正确',
  bad: '回答错误 · 已加入错题本',
  review: '题目待核对 · 此题不计入正确率',
};

function QuestionCard({ session, question, index, count, done, total, dispatch, move }) {
  const { progress, mode, retry, selected, focusFeedback } = session;
  const record = question && !retry ? progress.records[question.id] : undefined;
  const starred = Boolean(question && progress.bookmarks[question.id]?.on);
  const status = question && answerStatus(question, record);
  const feedback = useRef(null);
  const heading = useRef(null);
  const atEnd = index === count - 1;

  useEffect(() => {
    if (focusFeedback) feedback.current?.focus();
  }, [focusFeedback, record]);

  useEffect(() => {
    if (session.focusQuestion) heading.current?.focus();
  }, [session.focusQuestion, question?.id]);

  return (
    <div className="card question" aria-label="当前题目">
      <div className="q-head">
        <div className="type-row">
          {Object.entries(types).map(([type, name], i) => (
            <button key={type} aria-pressed={progress.type === type}
              onClick={() => dispatch({ type: 'type', value: type })}>0{i + 1} {name}</button>
          ))}
        </div>
        {question && (
          <button aria-pressed={starred} onClick={() => dispatch({ type: 'bookmark', at: Date.now() })}>
            {starred ? '★ 已收藏' : '☆ 收藏'}
          </button>
        )}
      </div>
      {question ? (
        <>
          <div className="meta">第 {index + 1} / {count} 题 · 原题号 {question.number} · {types[question.type]}</div>
          <div className="track" aria-hidden="true"><i style={{ width: (100 * done / total) + '%' }} /></div>
          <h2 className="prompt" ref={heading} tabIndex={-1}>{question.prompt}</h2>
          <div className="options" role="group" aria-label="选项">
            {question.options.map(option => {
              const correct = record && question.answer.includes(option.key);
              const incorrect = record && !correct && record.key === option.key;
              return (
                <button key={option.key} className={correct ? 'option good' : incorrect ? 'option bad' : 'option'}
                  disabled={Boolean(record)} aria-pressed={option.key === (record?.key ?? selected)}
                  onClick={() => dispatch({ type: 'pick', key: option.key })}>
                  <span className="key">{option.key}</span><span>{option.text}</span>
                  {correct && <span className="label">{question.answer.length > 1 ? '参考选项' : '正确答案'}</span>}
                  {incorrect && <span className="label">你的答案</span>}
                </button>
              );
            })}
          </div>
          <nav className="question-toolbar" aria-label="答题操作">
            <div className="toolbar-buttons">
              <button disabled={index === 0} onClick={() => move(-1)}>上一题</button>
              <button className="primary" disabled={!record && !selected}
                onClick={() => dispatch(record ? { type: 'retry', value: true } : { type: 'submit', at: Date.now() })}>
                {record ? '重做' : '确定'}
              </button>
              <button disabled={atEnd} onClick={() => move(1)}>下一题</button>
            </div>
          </nav>
          <div className="secondary-actions">
            {retry && <button onClick={() => dispatch({ type: 'retry', value: false })}>取消重做</button>}
            {record && atEnd && progress.type === 'judge' && mode === 'practice' && (
              <button className="primary" onClick={() => dispatch({ type: 'type', value: 'single' })}>开始单选题 →</button>
            )}
          </div>
          {record && (
            <section className={'feedback ' + status} ref={feedback} tabIndex={-1}>
              <strong>{feedbackLabels[status]}</strong>
              <p>你的答案 {record.key}　·　参考答案 {question.answer.join('、')}</p>
              <p>{question.explanation}</p>
            </section>
          )}
        </>
      ) : (
        <>
          <h2 className="prompt">
            {mode === 'wrong' ? '这个模块和题型暂时没有错题。'
              : mode === 'saved' ? '这个模块和题型暂时没有收藏。' : '本组题目已全部作答。'}
          </h2>
          <button className="primary" onClick={() => dispatch({ type: 'show-all' })}>查看全部题目</button>
        </>
      )}
    </div>
  );
}

function QuestionSearch({ onOpen }) {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);
  const input = useRef(null);
  const container = useRef(null);
  const active = Boolean(query.trim());
  const results = useMemo(() => searchQuestions(query), [query]);

  useEffect(() => {
    const close = event => {
      if (!container.current?.contains(event.target)) setExpanded(false);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);

  function openQuestion(question) {
    onOpen(question.id);
    setQuery('');
    setExpanded(false);
  }

  return (
    <div className="header-search" ref={container} onKeyDown={event => {
      if (event.key === 'Escape') { setExpanded(false); input.current.blur(); }
    }}>
      <div className="search-pill">
        <input id="question-search" ref={input} type="search" value={query}
          aria-label="搜索题目" placeholder="搜索题目"
          aria-expanded={expanded && active} aria-controls="search-results"
          onFocus={() => setExpanded(true)}
          onChange={event => { setQuery(event.target.value); setExpanded(true); }} />
        <button className="search-icon" aria-label={active ? '查看搜索结果' : '搜索题目'}
          onClick={() => { setExpanded(true); input.current.focus(); }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="10" cy="10" r="6" /><path d="m15 15 6 6" />
          </svg>
        </button>
      </div>
      {expanded && active && (
        <div className="search-dropdown" id="search-results">
          <div className="side-head">
            <p role="status">找到 {results.length} 道题</p>
            <button className="subtle" onClick={() => { setQuery(''); input.current.focus(); }}>清空搜索</button>
          </div>
          <div className="search-results">
            {results.map(question => (
              <button key={question.id} className="search-result" onClick={() => openQuestion(question)}>
                <span>{question.title} · {types[question.type]} · 原题号 {question.number}</span>
                <strong>{question.prompt}</strong>
              </button>
            ))}
            {!results.length && <p className="search-empty">没有找到相关题目，试试其他关键词。</p>}
          </div>
        </div>
      )}
    </div>
  );
}

function ProgressDialog({ dialog, progress, dispatch, onReset }) {
  const upload = useRef(null);
  const [message, setMessage] = useState('');
  const [resetting, setResetting] = useState(false);
  const [clearBookmarks, setClearBookmarks] = useState(false);

  function exportProgress() {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = '杰哥题库-进度.json';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function importProgress(event) {
    const file = event.currentTarget.files[0];
    event.currentTarget.value = '';
    if (!file) return;
    try {
      if (file.size > 2_000_000) throw Error('文件过大');
      const value = validateProgress(JSON.parse(await file.text()));
      dispatch({ type: 'import', value });
      setMessage('进度已合并。');
    } catch {
      setMessage('导入失败，请选择本站导出的进度文件。');
    }
  }

  return (
    <dialog ref={dialog} aria-labelledby="progress-title" onClose={() => {
      setMessage(''); setResetting(false); setClearBookmarks(false);
    }}>
      <form method="dialog"><button className="close" aria-label="关闭">×</button></form>
      <h2 id="progress-title">进度管理</h2>
      <p>导出进度、错题和收藏。在另一设备导入即可继续，导入会合并已有记录。</p>
      <div className="actions">
        <button className="primary" onClick={exportProgress}>导出进度</button>
        <button onClick={() => upload.current.click()}>导入进度</button>
      </div>
      <input ref={upload} type="file" accept=".json,application/json" hidden onChange={importProgress} />
      <p role="status">{message}</p>
      <div className="reset-section">
        {resetting ? (
          <>
            <h3>确认全部重做？</h3>
            <p>将清空两套题库的答题记录、错题、答题位置和模拟考试记录。需要保留进度时，请先导出备份。</p>
            <label className="filter"><input type="checkbox" checked={clearBookmarks}
              onChange={event => setClearBookmarks(event.target.checked)} /> 同时清空收藏</label>
            <div className="actions">
              <button onClick={() => setResetting(false)}>取消重置</button>
              <button className="danger" onClick={() => { onReset(clearBookmarks); dialog.current.close(); }}>确认重置进度</button>
            </div>
          </>
        ) : <button className="danger" onClick={() => setResetting(true)}>全部重做</button>}
      </div>
    </dialog>
  );
}

function App() {
  const [session, dispatch] = useReducer(quizReducer, undefined, initialSession);
  const { progress, mode, current, unanswered, readError } = session;
  const [notice, setNotice] = useState(readError ? '已有学习记录无法读取。可在进度管理中导入备份。' : '');
  const lastSaved = useRef(progress);
  const dialog = useRef(null);
  const examSetup = useRef(null);
  const mock = useMockExam(setNotice);
  const [examVisible, setExamVisible] = useState(() => Boolean(mock.exam));
  const { records } = progress;
  const answered = bank.filter(question => records[question.id]);
  const correct = answered.filter(question => answerStatus(question, records[question.id]) === 'good').length;
  const wrong = answered.filter(question => answerStatus(question, records[question.id]) === 'bad').length;
  const accuracy = correct + wrong ? Math.round(100 * correct / (correct + wrong)) + '%' : '—';
  const questions = group(session);
  const done = questions.filter(question => records[question.id]).length;
  const filtered = questions.filter(question => matches(session, question));
  // Keep the current result visible if submitting or unbookmarking removes it from the filter.
  const queue = questions.filter(question => question.id === current || matches(session, question));
  const index = queue.findIndex(question => question.id === current);

  function move(step) {
    const next = queue[index + step];
    if (next) dispatch({ type: 'go', id: next.id });
  }

  const handleKey = useEffectEvent(event => {
    if (document.querySelector('dialog[open]') || event.ctrlKey || event.metaKey || event.altKey ||
      event.target.closest?.('input, textarea, select, [contenteditable]')) return;
    const key = event.key.toUpperCase();
    if (examVisible && mock.exam) {
      if (/^[A-D]$/.test(key)) mock.pick(key);
      if (event.key === 'ArrowLeft') mock.go(mock.exam.index - 1);
      if (event.key === 'ArrowRight') mock.go(mock.exam.index + 1);
      return;
    }
    if (/^[A-D]$/.test(key)) dispatch({ type: 'pick', key });
    if (event.key === 'Enter' && !event.target.closest?.('button, a')) {
      dispatch({ type: 'submit', at: Date.now() });
    }
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
  });

  useEffect(() => {
    const listener = event => handleKey(event);
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, []);

  useEffect(() => {
    if (lastSaved.current === progress) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(progress));
      lastSaved.current = progress;
    } catch {
      setNotice('浏览器暂时无法保存进度，请导出备份。');
    }
  }, [progress]);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(''), 4500);
    return () => clearTimeout(timer);
  }, [notice]);

  return (
    <>
      <header>
        <div className="top">
          <a className="brand" href="./"><span className="logo" aria-hidden="true">✓</span> 杰哥题库</a>
          <QuestionSearch onOpen={id => {
            setExamVisible(false);
            dispatch({ type: 'search-result', id });
          }} />
          <div className="header-navigation">
            <nav aria-label="练习模式">
              {Object.entries(modes).map(([id, name]) => (
                <button key={id} aria-pressed={!examVisible && mode === id} onClick={() => {
                  setExamVisible(false);
                dispatch({ type: 'mode', value: id });
                }}>
                  {name}{id === 'wrong' && wrong > 0 && <> <span id="wrong-count">{wrong}</span></>}
                </button>
              ))}
              <button aria-pressed={examVisible} onClick={() => {
                if (mock.exam) setExamVisible(true);
                else examSetup.current.showModal();
              }}>模拟考试</button>
            </nav>
            <button className="subtle manage-progress" onClick={() => dialog.current.showModal()}>进度管理</button>
          </div>
        </div>
      </header>
      <main>
        {examVisible && mock.exam ? (
          <MockExam controller={mock} onNew={() => examSetup.current.showModal()} />
        ) : (
          <>
            <section className="intro">
              <div><p className="eyebrow">VR · 专项训练</p><h1>今天练什么？</h1><p>从基础判断到单选应用，按题型逐步练习。</p></div>
              <div className="overview">
                {[[bank.length, '总题量'], [answered.length, '已答题'], [accuracy, '正确率']].map(([value, label]) => (
                  <div key={label}><strong>{value}</strong><small>{label}</small></div>
                ))}
              </div>
            </section>
            <div className="modules" role="group" aria-label="题库模块">
              {Object.entries(modules).map(([id, name]) => {
                const total = bank.filter(question => question.module === id).length;
                const complete = answered.filter(question => question.module === id).length;
                return (
                  <button key={id} className="module" aria-pressed={progress.module === id}
                    onClick={() => dispatch({ type: 'module', value: id })}>
                    <strong>{name}</strong><small>{complete} / {total} 已答</small>
                  </button>
                );
              })}
            </div>
            <section className="workspace">
              <QuestionCard session={session} question={queue[index]} index={index} count={queue.length}
                done={done} total={questions.length} dispatch={dispatch} move={move} />
              <aside className="card sidebar">
                <div className="side-head">
                  <h2>答题卡</h2>
                  <span id="side-count">{mode === 'practice' ? done + ' / ' + questions.length + ' 已答' : filtered.length + ' 道题'}</span>
                </div>
                <label className="filter">
                  <input type="checkbox" checked={unanswered} disabled={mode !== 'practice'}
                    onChange={event => dispatch({ type: 'unanswered', value: event.target.checked })} /> 仅看未答
                </label>
                <div className="legend"><span>未答</span><span className="good">正确</span><span className="bad">错误</span><span className="review">待核对</span></div>
                <div className="grid" role="group" aria-label="跳转题目">
                  {queue.map((question, i) => (
                    <button key={question.id} className={answerStatus(question, records[question.id])}
                      title={'原题号 ' + question.number} aria-label={'第 ' + (i + 1) + ' 题，原题号 ' + question.number}
                      aria-current={question.id === current ? 'true' : undefined}
                      onClick={() => dispatch({ type: 'go', id: question.id })}>{i + 1}</button>
                  ))}
                </div>
                <p className="hint">键盘快捷键　A–D 选项 · Enter 提交<br />← / → 切题</p>
              </aside>
            </section>
          </>
        )}
        <footer>学习记录保存在当前浏览器，可通过「进度管理」导出和导入。</footer>
      </main>
      <ProgressDialog dialog={dialog} progress={progress} dispatch={dispatch} onReset={clearBookmarks => {
        dispatch({ type: 'reset-progress', clearBookmarks });
        mock.clear(); setExamVisible(false); setNotice('全部答题进度已重置，可以重新开始。');
      }} />
      <ExamSetup dialog={examSetup} onStart={() => {
        try { mock.start(); setExamVisible(true); examSetup.current.close(); }
        catch (error) { setNotice(error.message); }
      }} />
      <div id="notice" role="status" hidden={!notice}>{notice}</div>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
