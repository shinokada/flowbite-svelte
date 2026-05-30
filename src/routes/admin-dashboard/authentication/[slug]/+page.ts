import type { PageLoad, EntryGenerator } from "./$types";

const authFiles = import.meta.glob("../*.svelte");

export const entries: EntryGenerator = () =>
  Object.keys(authFiles).map((path) => ({
    slug: path.replace("../", "").replace(".svelte", "")
  }));

export const load: PageLoad = async ({ params }) => {
  const post = await import(`../${params.slug}.svelte`);
  const content = post.default;

  return {
    content
  };
};
