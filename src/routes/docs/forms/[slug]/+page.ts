import type { PageLoad, EntryGenerator } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

export const prerender = true;

const formFiles = import.meta.glob("../*.md");
const loadFormDoc = createMarkdownDocLoader(formFiles, "Form");

export const entries: EntryGenerator = () =>
  Object.keys(formFiles).map((path) => ({
    slug: path.replace("../", "").replace(".md", "")
  }));

export const load: PageLoad = async ({ params }) => {
  return loadFormDoc(params.slug);
};
