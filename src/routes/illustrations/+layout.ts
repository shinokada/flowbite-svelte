import type { LayoutLoad } from "./$types";
import { fetchMarkdownPosts, fetchBuilders, fetchBlocksMarkdownPosts, fetchDashboardPosts } from "../utils";

export const prerender = true;

export const load: LayoutLoad = async ({ parent }) => {
  const parentData = await parent();

  try {
    const [posts, blocks, builders, dashboard] = await Promise.all([fetchMarkdownPosts(), fetchBlocksMarkdownPosts(), fetchBuilders(), fetchDashboardPosts()]);

    return {
      ...parentData,
      posts: { posts, blocks, builders, dashboard }
    };
  } catch (error) {
    console.error(`Error in load function for /illustrations: ${error}`);
    return {
      ...parentData,
      posts: { posts: {}, blocks: {}, builders: [], dashboard: [] }
    };
  }
};
