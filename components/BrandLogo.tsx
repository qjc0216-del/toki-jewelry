export default function BrandLogo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <div className={`toki-logo ${compact ? "compact" : ""} ${light ? "light" : ""}`} aria-label="TOKI — Wear Your Own Time">
      <img
        src="/toki-logo-final.webp"
        alt="TOKI — Wear Your Own Time"
        className="toki-logo-image"
      />
    </div>
  );
}
