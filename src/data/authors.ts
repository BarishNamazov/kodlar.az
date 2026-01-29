import TOML from "@iarna/toml";
import fs from "node:fs";
import path from "node:path";
import type { ImageMetadata } from "astro";

// Import all author images
const authorImages = import.meta.glob<{ default: ImageMetadata }>(
  "../images/authors/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

export interface AuthorLinks {
  github?: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
}

export interface Author {
  id: string;
  name: string;
  avatar: string | ImageMetadata;
  bio: string;
  links?: AuthorLinks;
}

let authorsCache: Record<string, Author> | null = null;

function loadAuthors(): Record<string, Author> {
  if (authorsCache) {
    return authorsCache;
  }

  const authorsPath = path.join(process.cwd(), "src/data/authors.toml");
  const authorsContent = fs.readFileSync(authorsPath, "utf-8");
  const parsedData = TOML.parse(authorsContent) as Record<
    string,
    {
      name: string;
      avatar: string;
      bio: string;
      links?: AuthorLinks;
    }
  >;

  authorsCache = {};

  for (const [id, authorData] of Object.entries(parsedData)) {
    // Try to find the imported image
    const avatarPath = `../images/authors/${authorData.avatar}`;
    const avatarImage = authorImages[avatarPath]?.default;

    authorsCache[id] = {
      id,
      ...authorData,
      avatar: avatarImage || authorData.avatar,
    };
  }

  return authorsCache;
}

export function getAuthor(id: string): Author | undefined {
  const authors = loadAuthors();
  return authors[id];
}

export function getAllAuthors(): Author[] {
  const authors = loadAuthors();
  return Object.values(authors);
}

export function getAuthorIds(): string[] {
  const authors = loadAuthors();
  return Object.keys(authors);
}
