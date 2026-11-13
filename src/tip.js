// Tip and bill-split helpers. Amounts are in cents to avoid floating-point drift.
export function tip(billCents, percent) {
  if (!Number.isInteger(billCents) || billCents < 0) throw new RangeError("billCents must be a non-negative integer");
  if (percent < 0) throw new RangeError("percent must be >= 0");
  return Math.round((billCents * percent) / 100);
}

export function split(totalCents, people) {
  if (!Number.isInteger(people) || people < 1) throw new RangeError("people must be a positive integer");
  const base = Math.floor(totalCents / people);
  const remainder = totalCents - base * people;
  return Array.from({ length: people }, (_, i) => base + (i < remainder ? 1 : 0));
}
