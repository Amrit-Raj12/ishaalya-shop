type ProductBadgeProps = {
  label: string;
  variant?: "primary" | "secondary";
};

export function ProductBadge({
  label,
  variant = "primary",
}: ProductBadgeProps) {
  return (
    <span
      className={`absolute top-2.5 left-2.5 z-10 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest ${
        variant === "primary"
          ? "bg-primary text-on-primary"
          : "bg-secondary text-on-secondary"
      }`}
    >
      {label}
    </span>
  );
}