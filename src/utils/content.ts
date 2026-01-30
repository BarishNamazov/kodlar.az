/**
 * Removes the YYYY-MM-DD prefix from a slug
 */
export function cleanSlug(slug: string): string {
  return slug.replace(/^\d{4}-\d{2}-\d{2}-/, "");
}
