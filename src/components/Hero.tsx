import type { CSSProperties } from "react";
import { useMagnetic, useParallax, usePointerGlow, usePrefersReducedMotion } from "../lib/motion";
import { ArrowIcon, MaskedLines } from "./primitives";

const marquee = [
  "React",
  "TypeScript",
  "Vue 3",
  "Design systems",
  "Interaction craft",
  "Performance",
  "Testing",
  "Accessibility",
];

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const glowRef = usePointerGlow<HTMLElement>(!reduced);
  const magnetRef = useMagnetic<HTMLAnchorElement>(0.18, !reduced);
  const portraitRef = useParallax<HTMLDivElement>(28, !reduced);

  return (
    <section className="hero" aria-labelledby="hero-title" ref={glowRef}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-copy">
        <p className="eyebrow" data-enter style={{ "--reveal-delay": "80ms" } as CSSProperties}>
          <span className="pulse" aria-hidden="true" />
          Frontend engineer · Independent builder
        </p>

        <h1 id="hero-title" className="hero-title">
          <MaskedLines
            delay={180}
            lines={[
              "I build interfaces",
              <>
                that make <em>complex</em>
              </>,
              "feel clear.",
            ]}
          />
        </h1>

        <p className="hero-intro" data-enter style={{ "--reveal-delay": "560ms" } as CSSProperties}>
          I’m Haotian Luo — a UNSW Computer Science and Information Technology
          graduate, now focused on turning ambitious product ideas into
          reliable, polished web experiences.
        </p>

        <div className="hero-actions" data-enter style={{ "--reveal-delay": "660ms" } as CSSProperties}>
          <a className="primary-button" href="#projects" ref={magnetRef}>
            <span className="primary-button-fill" aria-hidden="true" />
            <span className="primary-button-label">
              Explore selected work
              <ArrowIcon />
            </span>
          </a>
          <a className="text-link" href="#journey">
            My journey
            <span className="text-link-rule" aria-hidden="true" />
          </a>
        </div>
      </div>

      <aside
        className="profile-card"
        aria-label="Profile summary"
        data-enter
        style={{ "--reveal-delay": "480ms" } as CSSProperties}
      >
        <div className="portrait-wrap" ref={portraitRef}>
          <img
            src="https://github.com/Haotian14.png"
            alt="Haotian Luo"
            width="320"
            height="320"
            fetchPriority="high"
          />
          <span className="portrait-code">SYD / CN</span>
          <span className="portrait-sheen" aria-hidden="true" />
        </div>
        <div className="profile-meta">
          <p>Based between product thinking and frontend engineering.</p>
          <span className="availability">Open to meaningful collaborations</span>
        </div>
      </aside>

      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy}>
              {marquee.map((item) => (
                <span key={`${copy}-${item}`}>
                  {item}
                  <i />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span className="scroll-cue-label">Scroll</span>
        <span className="scroll-cue-rail">
          <span className="scroll-cue-dot" />
        </span>
      </div>
    </section>
  );
}
