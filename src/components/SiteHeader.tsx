import { navItems } from "../data";
import { useActiveSection, useScrolledPast, useTheme } from "../lib/motion";
import { ArrowIcon } from "./primitives";

function ThemeToggle() {
  const [theme, toggle] = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-thumb" />
      </span>
      <span className="theme-toggle-label" aria-hidden="true">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}

export function SiteHeader() {
  const active = useActiveSection(navItems.map((item) => item.id));
  const collapsed = useScrolledPast(40);

  return (
    <header className="site-header" data-collapsed={collapsed ? "true" : undefined}>
      <div className="scroll-progress" aria-hidden="true" />

      {/*
        The wordmark folds to its initials on scroll: "art " and "uo"
        collapse to zero width, leaving "HL." behind. The space after
        "Hart" sits inside the folding run so it closes up too.
        aria-label keeps the accessible name stable in both states.
      */}
      <a className="monogram" href="#top" aria-label="Hart Luo — back to top">
        <span className="monogram-mark" aria-hidden="true">
          <span className="mono-keep">H</span>
          <span className="mono-fold">
            <span>art&nbsp;</span>
          </span>
          <span className="mono-keep">L</span>
          <span className="mono-fold">
            <span>uo</span>
          </span>
        </span>
        <span className="monogram-dot" aria-hidden="true" />
      </a>

      <nav aria-label="Primary navigation" className="site-nav">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-active={active === item.id ? "true" : undefined}
            aria-current={active === item.id ? "true" : undefined}
          >
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="header-tail">
        <ThemeToggle />
        <a
          className="header-link"
          href="https://github.com/Haotian14"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <ArrowIcon />
        </a>
      </div>
    </header>
  );
}
