import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";
import { cleanSlug } from "../utils/content";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  const podcasts = await getCollection("podcasts");

  const allContent = [
    ...posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blogs/${cleanSlug(post.slug)}`,
      categories: post.data.categories,
      author: post.data.author,
    })),
    ...podcasts.map((podcast) => ({
      title: `🎙️ ${podcast.data.title}`,
      description: podcast.data.description,
      pubDate: podcast.data.date,
      link: `/podcasts#${cleanSlug(podcast.slug)}`,
      categories: ["Podcast"],
    })),
  ];

  const sortedContent = allContent.sort(
    (a, b) => b.pubDate.valueOf() - a.pubDate.valueOf(),
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site || "https://kodlar.az",
    items: sortedContent,
    customData: `<language>az</language>`,
  });
}
