/**
 * Convert date to a unified format.
 * @param date date to be converted
 */
export function toShortDateString(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
