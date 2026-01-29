/**
 * Search utility functions for text matching and filtering
 */

export interface SearchItem {
  title: string;
  description: string;
  href?: string;
}

/**
 * Check if a search query matches an item's title or description
 * @param query - The search query (case-insensitive)
 * @param item - The item to match against
 * @returns true if the query matches title or description
 */
export function matchesQuery(query: string, item: SearchItem): boolean {
  if (!query) return true;

  const normalizedQuery = query.toLowerCase().trim();
  const normalizedTitle = item.title.toLowerCase();
  const normalizedDescription = item.description.toLowerCase();

  return (
    normalizedTitle.includes(normalizedQuery) ||
    normalizedDescription.includes(normalizedQuery)
  );
}

/**
 * Filter a list of items by a search query
 * @param query - The search query
 * @param items - Array of items to filter
 * @returns Filtered array of items that match the query
 */
export function filterByQuery<T extends SearchItem>(
  query: string,
  items: T[],
): T[] {
  if (!query) return items;
  return items.filter((item) => matchesQuery(query, item));
}

/**
 * Normalize a search query for consistent matching
 * @param query - The raw search query
 * @returns Normalized lowercase trimmed query
 */
export function normalizeQuery(query: string): string {
  return query.toLowerCase().trim();
}
