// AZKIS monogram in the navy + gold style of the design. Swap for the real logo file when available.
export default function Logo({ light = false, compact = false }) {
  const navy = light ? "#fff" : "#0B2A4A";
  return (
    <span className="logo">
      <svg width="58" height="44" viewBox="0 0 58 44" aria-hidden="true">
        <path d="M2 42L17 3h8L10 42z" fill={navy} />
        <path d="M17 42L32 3h8L25 42z" fill="#C2A15B" />
        <path d="M32 42L47 3h8L40 42z" fill={navy} />
        <path d="M10 30h38v6H10z" fill="#C2A15B" opacity=".0" />
      </svg>
      <span className="logo-text">
        <b style={{ color: navy }}>AZKIS COSMOPOLITAN</b>
        {!compact && <small style={{ color: light ? "#B9C4D0" : "#0B2A4A" }}>POWER · DATA · VOICE · TURNKEY PROJECTS</small>}
      </span>
    </span>
  );
}
