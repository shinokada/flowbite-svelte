import type { PageLoad, EntryGenerator } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

export const prerender = true;

const componentFiles = import.meta.glob("../*.md");
const loadComponentDoc = createMarkdownDocLoader(componentFiles, "Component");

export const entries: EntryGenerator = () =>
  Object.keys(componentFiles).map((path) => ({
    slug: path.replace("../", "").replace(".md", "")
  }));

export const load: PageLoad = async ({ params }) => {
  return loadComponentDoc(params.slug);
};
