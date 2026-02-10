import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      author: z.string(),
      date: z.date(),
      description: z.string(),
      image: z.string().optional(),
      categories: z.array(z.string()),
    }),
});

const podcastCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      image: z.string().optional(),
      hosts: z.array(z.string()),
      youtube: z.string().optional(),
    }),
});

const authorCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      name: z.string(),
      avatar: z.string().optional(),
      links: z
        .object({
          github: z.string().optional(),
          linkedin: z.string().optional(),
          website: z.string().optional(),
        })
        .optional(),
    }),
});

export const collections = {
  blog: blogCollection,
  podcasts: podcastCollection,
  authors: authorCollection,
};
