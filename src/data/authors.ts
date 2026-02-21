import type { ImageMetadata } from "astro";
import { getCollection } from "astro:content";

// Import all author images
const authorImages = import.meta.glob<{ default: ImageMetadata }>(
  "../images/authors/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

export interface AuthorLinks {
  github?: string;
  linkedin?: string;
  website?: string;
}

export interface Author {
  id: string;
  name: string;
  avatar: string | ImageMetadata;
  bio: string;
  links?: AuthorLinks;
  render: () => Promise<{ Content: AstroComponentFactory }>;
}

type AstroComponentFactory =
  import("astro/runtime/server/index.js").AstroComponentFactory;

function normalizeGitHubLink(link: string): string {
  if (link.startsWith("http://") || link.startsWith("https://")) {
    return link;
  }
  return `https://github.com/${link}`;
}

function normalizeLinkedInLink(link: string): string {
  if (link.startsWith("http://") || link.startsWith("https://")) {
    return link;
  }
  return `https://linkedin.com/in/${link}`;
}

function resolveAvatar(avatar?: string): string | ImageMetadata {
  if (!avatar) return "";
  const avatarPath = `../images/authors/${avatar}`;
  return authorImages[avatarPath]?.default || avatar;
}

function normalizeLinks(links?: AuthorLinks): AuthorLinks | undefined {
  if (!links) return undefined;
  return {
    ...links,
    github: links.github ? normalizeGitHubLink(links.github) : undefined,
    linkedin: links.linkedin
      ? normalizeLinkedInLink(links.linkedin)
      : undefined,
  };
}

export async function getAuthor(slug: string): Promise<Author | undefined> {
  const entries = await getCollection("authors");
  const entry = entries.find((e) => e.slug === slug);
  if (!entry) return undefined;

  return {
    id: entry.slug,
    name: entry.data.name,
    avatar: resolveAvatar(entry.data.avatar),
    bio: entry.body ?? "",
    links: normalizeLinks(entry.data.links),
    render: () => entry.render(),
  };
}

export async function getAllAuthors(): Promise<Author[]> {
  const entries = await getCollection("authors");
  return entries.map((entry) => ({
    id: entry.slug,
    name: entry.data.name,
    avatar: resolveAvatar(entry.data.avatar),
    bio: entry.body ?? "",
    links: normalizeLinks(entry.data.links),
    render: () => entry.render(),
  }));
}

export async function getAuthorIds(): Promise<string[]> {
  const entries = await getCollection("authors");
  return entries.map((entry) => entry.slug);
}
