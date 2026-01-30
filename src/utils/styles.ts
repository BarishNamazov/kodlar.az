/**
 * Shared style utilities used across multiple components
 */

/**
 * Tag color classes used in Tag.astro component
 */
const TAG_COLORS = [
  "tag--blue",
  "tag--green",
  "tag--purple",
  "tag--orange",
  "tag--cyan",
  "tag--red",
] as const;

/**
 * Generate a consistent tag color class based on the tag string
 * Uses a hash function to deterministically assign colors
 */
export function getTagColor(tag: string): (typeof TAG_COLORS)[number] {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  return TAG_COLORS[Math.abs(hash) % TAG_COLORS.length];
}

/**
 * Format a date in Azerbaijani locale
 */
export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat("az-AZ", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(date);
}

export function formatDateLong(date: Date): string {
  return new Intl.DateTimeFormat("az-AZ", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
