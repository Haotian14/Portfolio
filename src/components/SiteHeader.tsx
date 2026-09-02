import { navItems } from "../data";
import { useActiveSection, useTheme } from "../lib/motion";
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

  return (
    <header className="site-header">
      <div className="scroll-progress" aria-hidden="true" />

      <a className="monogram" href="#top" aria-label="Back to top">
        <span className="monogram-mark">HL</span>
        <span className="monogram-dot" />
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
