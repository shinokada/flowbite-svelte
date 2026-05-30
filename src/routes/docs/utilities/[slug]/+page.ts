import type { PageLoad, EntryGenerator } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

export const prerender = true;

const utilitiesFiles = import.meta.glob("../*.md");
const loadUtilitiesDoc = createMarkdownDocLoader(utilitiesFiles, "Utilities");

export const entries: EntryGenerator = () =>
  Object.keys(utilitiesFiles).map((path) => ({
    slug: path.replace("../", "").replace(".md", "")
  }));

export const load: PageLoad = async ({ params }) => {
  return loadUtilitiesDoc(params.slug);
};
