import { fetchMarkdownPosts, fetchBuilders, fetchBlocksMarkdownPosts, fetchDashboardPosts } from "../utils";

// export const prerender = true;

/** @type {import('./$types').LayoutLoad} */
export const load = async () => {
  try {
    const [posts, blocks, builders, dashboard] = await Promise.all([fetchMarkdownPosts(), fetchBlocksMarkdownPosts(), fetchBuilders(), fetchDashboardPosts()]);
    return { posts: { posts, blocks, builders, dashboard } };
  } catch (error) {
    console.error(`Error in load function for /docs: ${error}`);
  }
};
