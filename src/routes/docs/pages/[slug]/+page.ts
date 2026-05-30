import type { PageLoad, EntryGenerator } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

export const prerender = true;

const pagesFiles = import.meta.glob("../*.md");
const loadPageDoc = createMarkdownDocLoader(pagesFiles, "Page");

export const entries: EntryGenerator = () =>
  Object.keys(pagesFiles).map((path) => ({
    slug: path.replace("../", "").replace(".md", "")
  }));

export const load: PageLoad = async ({ params }) => {
  return loadPageDoc(params.slug);
};
