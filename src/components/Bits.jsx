import React from "react";

export const Tape = ({ thin }) => <div className={thin ? "tape thin" : "tape"} />;

export const Kicker = ({ children, grey }) => (
  <div className={grey ? "kicker grey" : "kicker"}>{children}</div>
);

export const SectionHead = ({ kicker, title, lede, grey }) => (
  <div className="sec-head">
    <Kicker grey={grey}>{kicker}</Kicker>
    <h2 style={{ fontSize: "clamp(34px,6vw,58px)", marginTop: 12 }}>{title}</h2>
    {lede && (
      <p style={{ fontSize: 18, marginTop: 14, maxWidth: 720 }}>{lede}</p>
    )}
  </div>
);

export const Card = ({ n, title, children }) => (
  <div className="card">
    {n && (
      <div className="anton" style={{ color: "var(--yellow)", opacity: 0.4, fontSize: 22 }}>
        {n}
      </div>
    )}
    <h3>{title}</h3>
    <p>{children}</p>
  </div>
);

export const Field = ({ label, hint, required, children }) => (
  <div className="field">
    <label>
      {label} {required && <span className="req">*</span>}
      {hint && <div className="hint">{hint}</div>}
    </label>
    {children}
  </div>
);

export const Fieldset = ({ title, note, children }) => (
  <div className="fieldset">
    <div className="fs-title">{title}</div>
    {note && <div className="fs-note">{note}</div>}
    {children}
  </div>
);

/** Honeypot — bots fill it, humans never see it. */
export const Honeypot = () => (
  <input type="checkbox" name="botcheck" className="hp" tabIndex="-1" autoComplete="off" />
);

export const Status = ({ state, message, okText }) => {
  if (state === "done") return <div className="status ok">{okText}</div>;
  if (state === "error") return <div className="status err">{message}</div>;
  return null;
};

export const CheckGroup = ({ name, options }) => (
  <div className="checks">
    {options.map((o) => (
      <label className="check" key={o}>
        <input type="checkbox" name={name} value={o} />
        <span>{o}</span>
      </label>
    ))}
  </div>
);

export const ScaleGroup = ({ name, low, high }) => (
  <div>
    <div className="scale">
      {[1, 2, 3, 4, 5].map((n) => (
        <label key={n}>
          <input type="radio" name={name} value={n} required />
          {n}
        </label>
      ))}
    </div>
    <div className="hint" style={{ marginTop: 8 }}>
      1 = {low} &nbsp;·&nbsp; 5 = {high}
    </div>
  </div>
);
