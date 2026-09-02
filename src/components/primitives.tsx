import type { CSSProperties, ReactNode } from "react";

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`arrow-icon ${className}`.trim()}
      viewBox="0 0 16 16"
      width="12"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 12 12 4" />
      <path d="M5.5 4H12v6.5" />
    </svg>
  );
}

type RevealProps = {
  children: ReactNode;
  /** Motion variant. `mask` wipes upward from a clipped line, `up` glides in. */
  variant?: "up" | "mask" | "fade" | "scale";
  /** Stagger index — each step adds 70ms to the delay. */
  delay?: number;
  as?: "div" | "span" | "li" | "p" | "section" | "article" | "header" | "footer";
  className?: string;
  style?: CSSProperties;
};

/**
 * Wraps content in the shared scroll-reveal contract: the element is hidden
 * until the page observer marks it `data-revealed`, and CSS owns the motion.
 */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
}: RevealProps) {
  return (
    <Tag
      data-reveal={variant}
      className={className || undefined}
      style={{ ...style, "--reveal-delay": `${delay * 70}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/**
 * Splits a heading into lines that each wipe up from their own mask —
 * the signature entrance for the display type.
 */
export function MaskedLines({
  lines,
  delay = 0,
}: {
  lines: ReactNode[];
  delay?: number;
}) {
  return (
    <>
      {lines.map((line, index) => (
        <span className="mask-line" key={index}>
          <span
            className="mask-line-inner"
            style={{ "--reveal-delay": `${delay + index * 90}ms` } as CSSProperties}
          >
            {line}
          </span>
        </span>
      ))}
    </>
  );
}
