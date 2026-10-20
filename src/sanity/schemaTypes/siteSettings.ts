import { defineField, defineType } from "sanity";

// Placeholder document that proves the Studio, dataset and queries work end
// to end. Replace or extend it when real content types are modelled.
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site title",
      type: "string",
    }),
  ],
});
