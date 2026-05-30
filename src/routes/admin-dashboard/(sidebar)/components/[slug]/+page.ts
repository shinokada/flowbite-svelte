import type { PageLoad, EntryGenerator } from "./$types";

const componentFiles = import.meta.glob("../*.md");

export const entries: EntryGenerator = () =>
  Object.keys(componentFiles).map((path) => ({
    slug: path.replace("../", "").replace(".md", "")
  }));

export const load: PageLoad = async ({ params }) => {
  const post = await import(`../${params.slug}.md`);
  const { title, dir } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    dir
  };
};
