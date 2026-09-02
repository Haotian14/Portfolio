import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  liveHref?: string;
  image?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Texas Hold'em Trainer",
    description:
      "A complete 6-max poker training loop with range-aware AI, replayable hands, EV-based reviews and long-term leak reports. Built as an offline-first PWA with 985 automated tests.",
    tags: ["React", "TypeScript", "PWA", "Playwright"],
    href: "https://github.com/Haotian14/Texas_Hold",
    liveHref: "https://texas-hold.luohaotian0616.workers.dev/",
    image:
      "https://raw.githubusercontent.com/Haotian14/Texas_Hold/main/docs/assets/table.jpg",
  },
  {
    number: "02",
    title: "Frontend Interview Handbook",
    description:
      "A structured frontend knowledge system with 50 in-depth topics, full-text search, interview drills, code references and a dependency-based learning map. Every route is prerendered for speed and discoverability.",
    tags: ["React", "TypeScript", "Vite", "MDX"],
    href: "https://github.com/Haotian14/frontend-interview-notes",
  },
  {
    number: "03",
    title: "IBKR Review Workspace",
    description:
      "A security-conscious, read-only investment review workspace built around the official IBKR MCP. It turns a written investment discipline into a repeatable daily portfolio review workflow.",
    tags: ["Codex", "MCP", "Automation", "Security"],
    href: "https://github.com/Haotian14/stockportfolio",
  },
];

const skills = [
  "React",
  "TypeScript",
  "Vue 3",
  "JavaScript",
  "Vite",
  "Umi",
  "Ant Design",
  "ECharts",
  "Node.js",
  "Spring Boot",
  "Docker",
  "GitHub Actions",
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Back to top">
          HL<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#journey">Journey</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
        </nav>
        <a
          className="header-link"
          href="https://github.com/Haotian14"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <ArrowIcon />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow"><span /> Frontend engineer · Independent builder</p>
            <h1 id="hero-title">
              I build interfaces
              <br />
              that make <em>complex</em>
              <br />
              feel clear.
            </h1>
            <p className="hero-intro">
              I’m Haotian Luo — a UNSW Computer Science and Information
              Technology graduate, now focused on turning ambitious product
              ideas into reliable, polished web experiences.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                Explore selected work <ArrowIcon />
              </a>
              <a className="text-link" href="#journey">
                My journey ↓
              </a>
            </div>
          </div>

          <aside className="profile-card" aria-label="Profile summary">
            <div className="portrait-wrap">
              <img
                src="https://github.com/Haotian14.png"
                alt="Haotian Luo"
                width="320"
                height="320"
              />
              <span className="portrait-code">SYD / CN</span>
            </div>
            <div className="profile-meta">
              <p>Based between product thinking and frontend engineering.</p>
              <span>Open to meaningful collaborations</span>
            </div>
          </aside>

          <div className="hero-index" aria-hidden="true">01 / 04</div>
        </section>

        <section className="section journey-section" id="journey">
          <div className="section-heading">
            <p className="section-kicker">02 — Journey</p>
            <h2>From computer science foundations to shipping real products.</h2>
          </div>

          <ol className="timeline">
            <li>
              <div className="timeline-marker">01</div>
              <div className="timeline-content">
                <p className="timeline-label">University</p>
                <h3>Bachelor of Computer Science</h3>
                <p className="timeline-place">UNSW Sydney</p>
                <p>
                  Built a rigorous foundation in software engineering,
                  algorithms and artificial intelligence through hands-on
                  systems and problem-solving projects.
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-marker">02</div>
              <div className="timeline-content">
                <p className="timeline-label">Postgraduate</p>
                <h3>Master of Information Technology</h3>
                <p className="timeline-place">UNSW Sydney</p>
                <p>
                  Deepened my technical range across security, data systems
                  and modern software delivery while connecting academic ideas
                  to product-oriented engineering.
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-marker">03</div>
              <div className="timeline-content">
                <p className="timeline-label">Now</p>
                <h3>Frontend Engineer</h3>
                <p className="timeline-place">Product &amp; Platform Development</p>
                <p>
                  Building production web experiences with React, Vue and
                  TypeScript — from complex interaction flows to performance,
                  testing and release quality.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="section work-section" id="work">
          <div className="work-intro">
            <p className="section-kicker">03 — How I work</p>
            <h2>Product sense in the details. Engineering discipline underneath.</h2>
            <p>
              I enjoy the part of frontend work where the answer is not simply
              “build the screen” — clarifying fuzzy requirements, modelling
              complicated state, protecting the main user flow and making the
              final experience feel effortless.
            </p>
          </div>

          <div className="principles">
            <article>
              <span>01</span>
              <h3>Think in systems</h3>
              <p>Design components, state and data flow so the product can grow without becoming fragile.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Ship with evidence</h3>
              <p>Use tests, performance budgets and reproducible flows to turn confidence into something measurable.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Stay close to users</h3>
              <p>Treat interaction polish, edge cases and clear feedback as core product work—not decoration.</p>
            </article>
          </div>

          <div className="skills-panel">
            <p>Tools I reach for</p>
            <div className="skill-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading projects-heading">
            <p className="section-kicker">04 — Selected projects</p>
            <h2>Learning by building things that are meant to be used.</h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">{project.number}</div>
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags" aria-label="Technologies used">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={project.href} target="_blank" rel="noreferrer">
                      Source code <ArrowIcon />
                    </a>
                    {project.liveHref && (
                      <a href={project.liveHref} target="_blank" rel="noreferrer">
                        Live project <ArrowIcon />
                      </a>
                    )}
                  </div>
                </div>
                {project.image ? (
                  <a
                    className="project-image"
                    href={project.liveHref}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <img src={project.image} alt={`${project.title} interface`} loading="lazy" />
                  </a>
                ) : (
                  <div className="project-glyph" aria-hidden="true">
                    <span>{project.number}</span>
                    <small>BUILD / ITERATE</small>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="closing-section">
          <p className="section-kicker">What’s next</p>
          <h2>Still learning. Still shipping.</h2>
          <p>
            I’m especially interested in ambitious frontend systems, AI-native
            products and the craft of turning complex tools into interfaces
            people actually enjoy using.
          </p>
          <a href="https://github.com/Haotian14" target="_blank" rel="noreferrer">
            Follow the work on GitHub <ArrowIcon />
          </a>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Haotian Luo</span>
        <span>Designed &amp; built with intention.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
