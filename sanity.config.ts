import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { postType } from "./sanity/schemaTypes/post";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "tfmd51tt";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  basePath: "/studio",
  name: "Asas_AlAmn_Content_Studio",
  title: "لوحة تحكم مقالات أساس الأمن الخليجي",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [postType],
  },
});