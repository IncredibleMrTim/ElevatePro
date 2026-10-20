import { createImageUrlBuilder } from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "./env";

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source: Image) {
  return imageBuilder.image(source);
}

/** Reads the pixel size out of a Sanity image asset reference
 * (`image-<id>-<width>x<height>-<format>`). Returns undefined if it doesn't match. */
export function getImageDimensions(assetRef: string) {
  const match = assetRef.match(/-(\d+)x(\d+)-[a-z]+$/i);
  if (!match) return undefined;
  return { width: Number(match[1]), height: Number(match[2]) };
}
