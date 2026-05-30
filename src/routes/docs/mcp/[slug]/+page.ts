import type { PageLoad, EntryGenerator } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

export const prerender = true;

const mcpFiles = import.meta.glob("../*.md");
const loadMcpDoc = createMarkdownDocLoader(mcpFiles, "MCP");

export const entries: EntryGenerator = () =>
  Object.keys(mcpFiles).map((path) => ({
    slug: path.replace("../", "").replace(".md", "")
  }));

export const load: PageLoad = async ({ params }) => {
  return loadMcpDoc(params.slug);
};
