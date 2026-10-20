import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  basePath: "/admin",
  title: "ElevatePro Surveys", // shown in the login card header
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    // Previews the public site with live drafts. The enable route needs
    // SANITY_API_READ_TOKEN to be set on the server.
    presentationTool({
      previewUrl: { previewMode: { enable: "/api/draft-mode/enable" } },
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  // Google as the primary sign-in, with Sanity's own email/password as a
  // fallback if Google is unavailable — drops GitHub/Vercel from the
  // default provider list. Only invited project members can actually
  // sign in either way (managed per-project in manage.sanity.io — this
  // needs setting up fresh for each new Sanity project), so this is
  // about which sign-in methods show up, not who's allowed in.
  auth: {
    providers: (prev) =>
      prev.filter(
        (provider) => provider.name === "google" || provider.name === "sanity",
      ),
  },
});
