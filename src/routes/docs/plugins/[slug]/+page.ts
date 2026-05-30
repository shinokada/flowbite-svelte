import type { PageLoad, EntryGenerator } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

export const prerender = true;

const pluginsFiles = import.meta.glob("../*.md");
const loadPluginsDoc = createMarkdownDocLoader(pluginsFiles, "Plugins");

export const entries: EntryGenerator = () =>
  Object.keys(pluginsFiles).map((path) => ({
    slug: path.replace("../", "").replace(".md", "")
  }));

export const load: PageLoad = async ({ params }) => {
  return loadPluginsDoc(params.slug);
};
