import { useEffect, useReducer, useRef, useState } from 'react';
import { types } from './quiz';
import { createExam, examQuestions, examReducer, examScore, examStorageKey, loadExam } from './exam';

export function useMockExam(onStorageError) {
  const [exam, dispatch] = useReducer(examReducer, undefined, loadExam);
  const [now, setNow] = useState(Date.now);
  const errorHandler = useRef(onStorageError);
  errorHandler.current = onStorageError;

  useEffect(() => {
    try {
      if (exam) localStorage.setItem(examStorageKey, JSON.stringify(exam));
      else localStorage.removeItem(examStorageKey);
    } catch {
      errorHandler.current('模拟考试记录暂时无法保存，请保持页面打开。');
    }
  }, [exam]);

  const deadline = exam?.finishedAt === null ? exam.deadline : null;
  useEffect(() => {
    if (deadline === null) return;
    const tick = () => {
      const time = Date.now();
      setNow(time);
      if (time >= deadline) dispatch({ type: 'finish', at: time });
    };
    tick();
    const timer = setInterval(tick, 1000);
    document.addEventListener('visibilitychange', tick);
    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', tick);
    };
  }, [deadline]);

  return {
    exam,
    remaining: Math.max(0, Math.ceil(((exam?.deadline ?? now) - now) / 1000)),
    start() { const next = createExam(); setNow(next.startedAt); dispatch({ type: 'start', exam: next }); },
    clear() { dispatch({ type: 'clear' }); },
    pick(key) { dispatch({ type: 'pick', key, at: Date.now() }); },
    go(index) { dispatch({ type: 'go', index }); },
    finish() { dispatch({ type: 'finish', at: Date.now() }); },
  };
}

export function ExamSetup({ dialog, onStart }) {
  return (
    <dialog ref={dialog} aria-labelledby="exam-setup-title">
      <form method="dialog"><button className="close" aria-label="关闭">×</button></form>
      <h2 id="exam-setup-title">随机生成理论模拟卷</h2>
      <p>40 道单选 + 10 道判断，每题 2 分，满分 100 分。限时 90 分钟，60 分合格。</p>
      <p>从现有基础知识、内容设计题库不重复抽题，参考答案不唯一的题目不参与组卷。作答自动保存，交卷后查看成绩和解析。</p>
      <p className="muted">大纲另有 150 分钟的专业实操考核。此处提供理论自测。现有题库缺少细分考点标签，知识点权重暂不严格配比。</p>
      <button className="primary dialog-main-action" onClick={onStart}>生成试卷并开始计时</button>
    </dialog>
  );
}

export function MockExam({ controller, onNew }) {
  const { exam, remaining, pick, go, finish } = controller;
  const submitDialog = useRef(null);
  const questionHeading = useRef(null);
  const questions = examQuestions(exam);
  const question = questions[exam.index];
  const finished = exam.finishedAt !== null;
  const answer = exam.answers[question.id];
  const answered = Object.keys(exam.answers).length;
  const score = finished ? examScore(exam) : null;

  useEffect(() => {
    questionHeading.current?.focus({ preventScroll: true });
  }, [exam.index]);

  useEffect(() => {
    if (finished) submitDialog.current?.close();
  }, [finished]);

  function resultClass(item) {
    const selected = exam.answers[item.id];
    if (!finished) return selected ? 'answered' : '';
    return selected === item.answer[0] ? 'good' : 'bad';
  }

  return (
    <section className="workspace exam-workspace" aria-label="理论模拟考试">
      <div className="card question">
        <div className="side-head">
          <h2>{finished ? '模拟成绩' : '理论模拟'}</h2>
          <span className={remaining <= 300 && !finished ? 'exam-clock urgent' : 'exam-clock'} role="timer" aria-label="剩余时间">
            {finished ? '已交卷' : Math.floor(remaining / 60).toString().padStart(2, '0') + ':' + (remaining % 60).toString().padStart(2, '0')}
          </span>
        </div>
        {finished && (
          <div className="exam-result" role="status">
            <strong>{score} 分 · {score >= 60 ? '合格' : '未达合格线'}</strong>
            <p>答对 {score / 2} 题 · 答错 {answered - score / 2} 题 · 未答 {50 - answered} 题</p>
            <button onClick={onNew}>再生成一套</button>
          </div>
        )}
        <div className="meta">第 {exam.index + 1} / 50 题 · {types[question.type]} · 每题 2 分 · {question.title} 原题号 {question.number}</div>
        <h2 className="prompt" ref={questionHeading} tabIndex={-1}>{question.prompt}</h2>
        <div className="options" role="group" aria-label="模拟题选项">
          {question.options.map(option => (
            <button key={option.key} disabled={finished}
              aria-pressed={answer === option.key}
              className={'option' + (finished && option.key === question.answer[0] ? ' good'
                : finished && option.key === answer ? ' bad' : '')}
              onClick={() => pick(option.key)}>
              <span className="key">{option.key}</span><span>{option.text}</span>
            </button>
          ))}
        </div>
        {finished && (
          <section className={'feedback ' + resultClass(question)} tabIndex={-1}>
            <strong>{answer === question.answer[0] ? '回答正确' : answer ? '回答错误' : '此题未答'}</strong>
            <p>你的答案 {answer ?? '未答'} · 参考答案 {question.answer[0]}</p>
            <p>{question.explanation}</p>
          </section>
        )}
        <nav className="question-toolbar" aria-label="模拟答题操作">
          <div className="toolbar-buttons">
            <button disabled={exam.index === 0} onClick={() => go(exam.index - 1)}>上一题</button>
            <button className="primary" disabled={finished} onClick={() => submitDialog.current.showModal()}>
              {finished ? score + ' 分' : '交卷'}
            </button>
            <button disabled={exam.index === 49} onClick={() => go(exam.index + 1)}>下一题</button>
          </div>
        </nav>
      </div>
      <aside className="card sidebar">
        <div className="side-head"><h2>模拟答题卡</h2><span>{answered} / 50 已答</span></div>
        <p className="muted exam-hint">{finished ? '点击题号查看答案和解析。' : '选中即保存，可随时修改。到时自动交卷。'}</p>
        <div className="grid exam-grid" role="group" aria-label="模拟题跳转">
          {questions.map((item, index) => (
            <button key={item.id} className={resultClass(item)} aria-label={'模拟第 ' + (index + 1) + ' 题'}
              aria-current={index === exam.index ? 'true' : undefined} onClick={() => go(index)}>{index + 1}</button>
          ))}
        </div>
        <p className="muted exam-hint">模拟成绩单独保存，可返回专项练习后继续本卷。</p>
      </aside>
      <dialog ref={submitDialog} aria-labelledby="exam-submit-title">
        <h2 id="exam-submit-title">确认交卷？</h2>
        <p>{50 - answered > 0 ? '还有 ' + (50 - answered) + ' 道题未答，未答题按 0 分计。' : '全部题目已作答。'}交卷后查看成绩和解析。</p>
        <div className="actions">
          <button onClick={() => submitDialog.current.close()}>继续答题</button>
          <button className="primary" onClick={finish}>确认交卷</button>
        </div>
      </dialog>
    </section>
  );
}
