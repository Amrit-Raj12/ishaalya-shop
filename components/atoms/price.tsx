type PriceProps = {
  amount: number;
  originalAmount?: number | null;
  className?: string;
};

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function Price({
  amount,
  originalAmount,
  className = "",
}: PriceProps) {
  const discount =
    originalAmount && originalAmount > amount
      ? Math.round(((originalAmount - amount) / originalAmount) * 100)
      : 0;

  return (
    <div className={`flex flex-wrap items-baseline gap-2 ${className}`}>
      <span className="font-display text-headline-sm text-primary">
        {currencyFormatter.format(amount)}
      </span>

      {originalAmount && originalAmount > amount && (
        <>
          <span className="text-body-md text-on-surface-variant line-through">
            {currencyFormatter.format(originalAmount)}
          </span>

          <span className="text-label-sm font-bold uppercase text-secondary">
            {discount}% OFF
          </span>
        </>
      )}
    </div>
  );
}