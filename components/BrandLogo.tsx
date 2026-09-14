export default function BrandLogo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  const c = light ? "#f8f3ec" : "#642d3a";
  return (
    <div className={`toki-logo ${compact ? "compact" : ""}`} aria-label="TOKI — Wear Your Own Time">
      <svg className="toki-monogram" viewBox="0 0 120 120" role="img" aria-hidden="true">
        <g fill="none" stroke={c} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 20 H98" />
          <path d="M60 20 V102" />
          <path d="M22 64 C23 39 40 31 60 31" />
          <path d="M98 64 C97 39 80 31 60 31" />
          <path d="M22 64 C23 88 39 95 51 98" />
          <path d="M98 64 C97 88 81 95 69 98" />
          <path d="M48 103 H72" />
        </g>
      </svg>
      <div className="toki-wordmark" style={{ color: c }}>
        <strong>TOKI</strong>
        <small>WEAR YOUR OWN TIME</small>
      </div>
    </div>
  );
}
