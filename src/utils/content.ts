/**
 * Extracts the date from a filename in format YYYY-MM-DD-*.md
 * Returns null if no date prefix found
 */
export function extractDateFromFilename(slug: string): Date | null {
  const dateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})-/);
  if (dateMatch) {
    return new Date(dateMatch[1]);
  }
  return null;
}

/**
 * Removes the YYYY-MM-DD prefix from a slug
 */
export function cleanSlug(slug: string): string {
  return slug.replace(/^\d{4}-\d{2}-\d{2}-/, "");
}
