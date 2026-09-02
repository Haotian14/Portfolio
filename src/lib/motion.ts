import { useCallback, useEffect, useRef, useState } from "react";

/** Tracks the user's motion preference so every effect can bow out gracefully. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/**
 * Reveals every `[data-reveal]` element once it enters the viewport.
 * A single observer covers the whole page, and elements already on screen at
 * load are revealed immediately so nothing above the fold ever waits.
 */
export function useRevealOnScroll(enabled = true) {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!enabled) {
      targets.forEach((el) => el.setAttribute("data-revealed", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-revealed", "true");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [enabled]);
}

/** Writes 0→1 read progress into `--scroll-progress` on the document element. */
export function useScrollProgress() {
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        Math.min(1, Math.max(0, progress)).toFixed(4),
      );
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}

/** Returns the id of the section currently occupying the middle of the viewport. */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState("");
  const key = ids.join("|");

  useEffect(() => {
    const sections = key
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [key]);

  return active;
}

/**
 * Publishes the pointer position inside an element as `--px` / `--py`
 * (0→1) so CSS can drive a spotlight without any per-frame React work.
 */
export function usePointerGlow<T extends HTMLElement>(enabled = true) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !enabled) return;

    let frame = 0;
    let next: { x: number; y: number } | null = null;

    const flush = () => {
      frame = 0;
      if (!next) return;
      node.style.setProperty("--px", next.x.toFixed(4));
      node.style.setProperty("--py", next.y.toFixed(4));
    };

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      next = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      };
      if (!frame) frame = requestAnimationFrame(flush);
    };

    const onLeave = () => node.style.setProperty("--glow-opacity", "0");
    const onEnter = () => node.style.setProperty("--glow-opacity", "1");

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerenter", onEnter);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerenter", onEnter);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled]);

  return ref;
}

/** Pulls an element gently toward the cursor — used for the primary call to action. */
export function useMagnetic<T extends HTMLElement>(strength = 0.22, enabled = true) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !enabled) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    let target = { x: 0, y: 0 };

    const flush = () => {
      frame = 0;
      node.style.setProperty("--magnet-x", `${target.x.toFixed(2)}px`);
      node.style.setProperty("--magnet-y", `${target.y.toFixed(2)}px`);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(flush);
    };

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      target = {
        x: (event.clientX - (rect.left + rect.width / 2)) * strength,
        y: (event.clientY - (rect.top + rect.height / 2)) * strength,
      };
      schedule();
    };

    const onLeave = () => {
      target = { x: 0, y: 0 };
      schedule();
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, [strength, enabled]);

  return ref;
}

/**
 * Maps an element's travel through the viewport to `--enter` (0→1),
 * which drives the slow parallax drift on the hero portrait.
 */
export function useParallax<T extends HTMLElement>(distance = 40, enabled = true) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !enabled) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const centre = rect.top + rect.height / 2;
      const ratio = (centre - window.innerHeight / 2) / window.innerHeight;
      node.style.setProperty(
        "--parallax-y",
        `${(Math.max(-1, Math.min(1, ratio)) * distance).toFixed(2)}px`,
      );
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [distance, enabled]);

  return ref;
}

export type Theme = "light" | "dark";

/** Persisted light/dark theme, with a View Transition crossfade where supported. */
export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "light";
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("hl-theme", theme);
    } catch {
      /* storage can be unavailable in private browsing — the theme still applies */
    }
  }, [theme]);

  const toggle = useCallback(() => {
    const next = () => setTheme((current) => (current === "dark" ? "light" : "dark"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !document.startViewTransition) {
      next();
      return;
    }
    document.startViewTransition(next);
  }, []);

  return [theme, toggle];
}
