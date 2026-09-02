import type { CSSProperties } from "react";
import { milestones } from "../data";
import { Reveal } from "./primitives";

export function Journey() {
  return (
    <section className="section journey-section" id="journey">
      <div className="section-heading">
        <Reveal as="p" variant="fade" className="section-kicker">
          02 — Journey
        </Reveal>
        <Reveal as="div" variant="up" delay={1}>
          <h2>From computer science foundations to shipping real products.</h2>
        </Reveal>
      </div>

      <ol className="timeline">
        {milestones.map((milestone, index) => (
          <li
            key={milestone.title}
            data-reveal="up"
            style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
          >
            <div className="timeline-marker">{milestone.marker}</div>
            <div className="timeline-content">
              <span className="timeline-rule" aria-hidden="true" />
              <p className="timeline-label">{milestone.label}</p>
              <h3>{milestone.title}</h3>
              <p className="timeline-place">{milestone.place}</p>
              <p className="timeline-body">{milestone.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
