"use client";

// Hero with glass chips that drift at different depths as the mouse moves.
export default function Hero({ name, role, headline, intro, stack }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.setProperty("--mx", x.toFixed(3));
    e.currentTarget.style.setProperty("--my", y.toFixed(3));
  };
  const depth = (d) => ({ transform: `translate(calc(var(--mx, 0) * ${d}px), calc(var(--my, 0) * ${d}px))` });

  return (
    <section id="home" className="hero" onMouseMove={move}>
      <div className="hero-inner">
        <p className="pill glass">
          <span className="dot" /> Open to opportunities
        </p>
        <p className="hello">Hi, I'm <strong>{name}</strong></p>
        <h1>{headline}</h1>
        <p className="lead">{intro}</p>
        <div className="cta">
          <a className="btn primary" href="#work">See my work</a>
          <a className="btn glass" href="#contact">Get in touch</a>
        </div>
        <p className="who">{role}</p>
      </div>

      <div className="chip glass c-a" style={depth(60)}>{stack[0]}</div>
      <div className="chip glass c-b" style={depth(-40)}>{stack[1]}</div>
      <div className="chip glass c-c" style={depth(80)}>{stack[3]}</div>
      <div className="stat glass" style={depth(-70)}>
        <strong>1+ year</strong>
        <span>shipping to production</span>
      </div>
    </section>
  );
}