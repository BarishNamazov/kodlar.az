import { z, defineCollection } from "astro:content";
import { extractDateFromFilename } from "../utils/content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ id }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      date: z
        .date()
        .optional()
        .transform((val, ctx) => {
          if (val) return val;
          const dateFromFilename = extractDateFromFilename(id);
          if (dateFromFilename) return dateFromFilename;
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Date must be in frontmatter or filename (YYYY-MM-DD)",
          });
          return z.NEVER;
        }),
      description: z.string(),
      image: z.string().optional(),
      categories: z.array(z.string()),
    }),
});

const podcastCollection = defineCollection({
  type: "content",
  schema: ({ id }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z
        .date()
        .optional()
        .transform((val, ctx) => {
          if (val) return val;
          const dateFromFilename = extractDateFromFilename(id);
          if (dateFromFilename) return dateFromFilename;
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Date must be in frontmatter or filename (YYYY-MM-DD)",
          });
          return z.NEVER;
        }),
      image: z.string().optional(),
      hosts: z.array(z.string()),
      youtube: z.string().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
  podcasts: podcastCollection,
};
