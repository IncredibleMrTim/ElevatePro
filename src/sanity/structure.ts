import type { StructureResolver } from "sanity/structure";

// Replaces Studio's default document list, so every singleton needs its own
// explicit list item here or it can't be opened in the editor.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.listItem()
        .title("Custom Colors")
        .child(
          S.document().schemaType("colorPalette").documentId("colorPalette"),
        ),
    ]);
