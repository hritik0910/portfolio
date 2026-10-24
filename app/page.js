import Hero from "../components/Hero";
import SpotlightCard from "../components/SpotlightCard";
import ThemeToggle from "../components/ThemeToggle";
import { site } from "../data/site";

function Visual({ kind }) {
  if (kind === "bars")
    return (
      <div className="viz bars" aria-hidden="true">
        {[40, 75, 55, 92, 68, 84].map((h, i) => (
          <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }} />
        ))}
      </div>
    );
  if (kind === "slides")
    return (
      <div className="viz slides" aria-hidden="true">
        <div /><div /><div />
      </div>
    );
  return (
    <div className="viz query" aria-hidden="true">
      <p>GET /results/_search</p>
      <p>brand: <em>"your-brand"</em></p>
      <p>aggs: share, trend, region</p>
    </div>
  );
}

export default function Home() {
  const loop = [...site.stack, ...site.stack];
  return (
    <>
      <div className="aurora" aria-hidden="true">
        <i className="blob b1" /><i className="blob b2" /><i className="blob b3" />
      </div>

      <nav className="nav glass" aria-label="Sections">
        <a href="#home" className="brand">{site.name}</a>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <ThemeToggle />
      </nav>

      <main>
        <Hero
          name={site.name}
          role={site.role}
          headline={site.headline}
          intro={site.intro}
          stack={site.stack}
        />

        <div className="marquee" aria-hidden="true">
          <div className="track">
            {loop.map((s, i) => (<span key={i}>{s}</span>))}
          </div>
        </div>

        <section id="about" className="section">
          <h2>About me</h2>
          <div className="about-grid">
            <SpotlightCard className="about-copy">
              {site.about.map((p, i) => (<p key={i}>{p}</p>))}
            </SpotlightCard>
            <div className="stats">
              {site.stats.map((s) => (
                <SpotlightCard key={s.label} className="stat-card">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills">
            {site.skills.map((g) => (
              <SpotlightCard key={g.group} className="skill-card">
                <h3>{g.group}</h3>
                <ul className="tags">
                  {g.items.map((t) => (<li key={t}>{t}</li>))}
                </ul>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section id="work" className="section">
          <h2>Selected work</h2>
          <div className="grid">
            {site.projects.map((p) => (
              <SpotlightCard key={p.title} className="card">
                <Visual kind={p.kind} />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="tags">
                  {p.tags.map((t) => (<li key={t}>{t}</li>))}
                </ul>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <SpotlightCard className="journey">
            {site.experience.map((e) => (
              <div key={e.title} className="step">
                <strong>{e.title}, {e.org}</strong>
                <span>{e.meta}</span>
                <ul className="points">
                  {e.points.map((p) => (<li key={p}>{p}</li>))}
                </ul>
              </div>
            ))}
            {site.education.map((e) => (
              <div key={e.title} className="step">
                <strong>{e.title}, {e.org}</strong>
                <span>{e.meta}</span>
              </div>
            ))}
          </SpotlightCard>
        </section>

        <section className="section">
          <h2>How I can help</h2>
          <div className="grid">
            {site.services.map((s) => (
              <SpotlightCard key={s.title} className="service">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>How I work</h2>
          <div className="grid">
            {site.process.map((s, i) => (
              <SpotlightCard key={s.title} className="service">
                <span className="num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <SpotlightCard className="contact">
            <h2>Have something to build?</h2>
            <div className="cta">
              <a
                className="btn primary"
                href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(site.email)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Email me
              </a>
              {site.links.map((l) => (
                <a
                  key={l.label}
                  className="btn glass"
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </SpotlightCard>
        </section>
      </main>

      <footer className="foot">© {new Date().getFullYear()} {site.name}</footer>
    </>
  );
}