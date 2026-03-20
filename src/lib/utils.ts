/**
 * Simple className merge utility (replaces shadcn's @/lib/utils cn)
 * No external deps — just filters falsy values and joins.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
