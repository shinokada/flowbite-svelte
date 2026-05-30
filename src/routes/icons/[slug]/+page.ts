import type { PageLoad, EntryGenerator } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = () => [{ slug: "outline-icons" }, { slug: "solid-icons" }, { slug: "quickstart" }];

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
