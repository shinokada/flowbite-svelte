import type { PageLoad, EntryGenerator } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

export const prerender = true;

const examplesFiles = import.meta.glob("../*.md");
const loadExamplesDoc = createMarkdownDocLoader(examplesFiles, "Examples");

export const entries: EntryGenerator = () =>
  Object.keys(examplesFiles).map((path) => ({
    slug: path.replace("../", "").replace(".md", "")
  }));

export const load: PageLoad = async ({ params }) => {
  return loadExamplesDoc(params.slug);
};
