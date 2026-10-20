import { createClient } from "next-sanity";
import { defineLive } from "next-sanity/live";

import { apiVersion, dataset, projectId } from "./env";

// Server-only. The viewer token lets sanityFetch read drafts, and it is never
// passed as `browserToken`, so it cannot reach a visitor's browser. Published
// content needs no token because the dataset is public.
const serverToken = process.env.SANITY_API_READ_TOKEN;

export const { sanityFetch, SanityLive } = defineLive({
  client: createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: "published",
  }),
  serverToken: serverToken || false,
});
