import type { CSSProperties } from "react";
import { principles, skills } from "../data";
import { Reveal } from "./primitives";

export function HowIWork() {
  return (
    <section className="section work-section tone-invert" id="work">
      <div className="work-intro">
        <Reveal as="p" variant="fade" className="section-kicker">
          03 — How I work
        </Reveal>
        <Reveal as="div" variant="up" delay={1}>
          <h2>Product sense in the details. Engineering discipline underneath.</h2>
        </Reveal>
        <Reveal as="p" variant="up" delay={2} className="work-lede">
          I enjoy the part of frontend work where the answer is not simply
          “build the screen” — clarifying fuzzy requirements, modelling
          complicated state, protecting the main user flow and making the final
          experience feel effortless.
        </Reveal>
      </div>

      <div className="principles">
        {principles.map((principle, index) => (
          <article
            key={principle.number}
            data-reveal="up"
            style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}
          >
            <span className="principle-number">{principle.number}</span>
            <h3>{principle.title}</h3>
            <p>{principle.body}</p>
            <span className="principle-rule" aria-hidden="true" />
          </article>
        ))}
      </div>

      <Reveal className="skills-panel" variant="up">
        <p className="skills-title">Tools I reach for</p>
        <div className="skill-list">
          {skills.map((skill, index) => (
            <span key={skill} style={{ "--i": index } as CSSProperties}>
              {skill}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
