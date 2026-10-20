import type { SchemaTypeDefinition } from "sanity";

import { colorPalette } from "./colorPalette";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, colorPalette],
};
