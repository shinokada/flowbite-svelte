import type { PageLoad, EntryGenerator } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

export const prerender = true;

const typographyFiles = import.meta.glob("../*.md");
const loadTypographyDoc = createMarkdownDocLoader(typographyFiles, "Typography");

export const entries: EntryGenerator = () =>
  Object.keys(typographyFiles).map((path) => ({
    slug: path.replace("../", "").replace(".md", "")
  }));

export const load: PageLoad = async ({ params }) => {
  return loadTypographyDoc(params.slug);
};
