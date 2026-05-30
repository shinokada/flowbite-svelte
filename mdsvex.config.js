import { defineMDSveXConfig as defineConfig } from "mdsvex";
import examples from "mdsvexamples";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const path_to_layout = join(__dirname, "./src/routes/layouts/component/+page.svelte");

/**
 * Remark plugin: adds id="<slug>" props to heading nodes so that
 * mdsvex custom h2/h3 components receive the slug as a prop during SSR.
 * This ensures <span id="..."> is populated at prerender time.
 */
function remarkHeadingIds() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === "heading") {
        const text = (node.children || [])
          .filter((child) => child.type === "text" || child.type === "inlineCode")
          .map((child) => child.value)
          .join("");
        const slug = text.replace(/\s/g, "-").toLocaleLowerCase();
        node.data = node.data || {};
        node.data.hProperties = node.data.hProperties || {};
        node.data.hProperties.id = slug;
      }
      for (const child of node.children || []) {
        visit(child);
      }
    };
    visit(tree);
  };
}

const config = defineConfig({
  layout: {
    componentLayout: path_to_layout
  },
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool"
  },

  remarkPlugins: [remarkHeadingIds, [examples, { defaults: { Wrapper: "/src/routes/utils/ExampleWrapper.svelte" } }]],
  rehypePlugins: []
});

export default config;
