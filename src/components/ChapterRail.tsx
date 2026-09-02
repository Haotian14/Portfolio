import { navItems } from "../data";
import { useActiveSection } from "../lib/motion";

const chapters = [
  { id: "top", marker: "01", label: "Intro" },
  ...navItems.map((item, index) => ({
    id: item.id,
    marker: String(index + 2).padStart(2, "0"),
    label: item.id === "work" ? "Practice" : item.label,
  })),
];

export function ChapterRail() {
  const active = useActiveSection(navItems.map((item) => item.id));
  const current = active || "top";

  return (
    <aside className="chapter-rail" aria-label="Page chapters">
      <span className="chapter-rail-title">Index</span>
      <nav>
        {chapters.map((chapter) => (
          <a
            href={`#${chapter.id}`}
            key={chapter.id}
            data-current={current === chapter.id ? "true" : undefined}
            aria-current={current === chapter.id ? "location" : undefined}
          >
            <span className="chapter-marker">{chapter.marker}</span>
            <i aria-hidden="true" />
            <span className="chapter-label">{chapter.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
