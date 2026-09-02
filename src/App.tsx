import { Atmosphere } from "./components/Atmosphere";
import { Closing, SiteFooter } from "./components/Closing";
import { Hero } from "./components/Hero";
import { HowIWork } from "./components/HowIWork";
import { Journey } from "./components/Journey";
import { Projects } from "./components/Projects";
import { SiteHeader } from "./components/SiteHeader";
import { usePrefersReducedMotion, useRevealOnScroll, useScrollProgress } from "./lib/motion";

export default function App() {
  const reduced = usePrefersReducedMotion();

  useScrollProgress();
  useRevealOnScroll(!reduced);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <Atmosphere />
      <SiteHeader />

      <main id="top">
        <Hero />
        <Journey />
        <HowIWork />
        <Projects />
        <Closing />
      </main>

      <SiteFooter />
    </div>
  );
}
