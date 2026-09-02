import type { CSSProperties } from "react";
import { projects, type Project } from "../data";
import { usePointerGlow, usePrefersReducedMotion } from "../lib/motion";
import { ArrowIcon, Reveal } from "./primitives";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduced = usePrefersReducedMotion();
  const cardRef = usePointerGlow<HTMLElement>(!reduced);

  return (
    <article
      className="project-card"
      ref={cardRef}
      data-reveal="up"
      style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
    >
      <span className="project-card-glow" aria-hidden="true" />
      <div className="project-number">{project.number}</div>

      <div className="project-copy">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags" aria-label="Technologies used">
          {project.tags.map((tag, tagIndex) => (
            <span key={tag} style={{ "--i": tagIndex } as CSSProperties}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.href} target="_blank" rel="noreferrer">
            Source code <ArrowIcon />
          </a>
          {project.liveHref && (
            <a href={project.liveHref} target="_blank" rel="noreferrer">
              Live website <ArrowIcon />
            </a>
          )}
        </div>
      </div>

      {project.image ? (
        <a
          className="project-image"
          href={project.liveHref ?? project.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title}`}
        >
          <img src={project.image} alt={`${project.title} interface`} loading="lazy" />
          <span className="project-image-veil" aria-hidden="true" />
          <span className="project-image-cta" aria-hidden="true">
            View <ArrowIcon />
          </span>
        </a>
      ) : (
        <div className="project-glyph" aria-hidden="true">
          <span>{project.number}</span>
          <small>BUILD / ITERATE</small>
        </div>
      )}
    </article>
  );
}

export function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading projects-heading">
        <Reveal as="p" variant="fade" className="section-kicker">
          04 — Selected projects
        </Reveal>
        <Reveal as="div" variant="up" delay={1}>
          <h2>Learning by building things that are meant to be used.</h2>
        </Reveal>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
