/**
 * Ambient background layers: two slow-drifting colour fields and a fine grain
 * overlay. Both are purely decorative, fixed, and never intercept pointers.
 */
export function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden="true">
      <span className="orb orb-clay" />
      <span className="orb orb-olive" />
      <span className="grain" />
    </div>
  );
}
