import Image from "next/image";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand-logo brand-logo--compact" : "brand-logo"}>
      <Image
        src="/toki-logo-final.webp"
        alt="TOKI — Wear Your Own Time"
        width={compact ? 170 : 260}
        height={compact ? 80 : 120}
        priority
      />
    </span>
  );
}
