import type { PageLoad, EntryGenerator } from "./$types";
import { error } from "@sveltejs/kit";

const exampleFiles = import.meta.glob("../*.svelte");

export const entries: EntryGenerator = () =>
  Object.keys(exampleFiles).map((path) => ({
    slug: path.replace("../", "").replace(".svelte", "")
  }));

export const load: PageLoad = async ({ params }) => {
  // Basic slug validation to prevent path traversal
  if (!/^[a-zA-Z0-9_-]+$/.test(params.slug)) {
    throw error(400, "Invalid slug");
  }
  try {
    const post = await import(`../${params.slug}.svelte`);
    const content = post.default;

    return {
      content
    };
  } catch (err) {
    console.error(`Failed to load accordion example "${params.slug}":`, err);
    throw error(404, `Accordion example "${params.slug}" not found`);
  }
};
