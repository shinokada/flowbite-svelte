import type { LayoutLoad } from "./$types";
import { fetchMarkdownPosts, fetchBuilders, fetchBlocksMarkdownPosts, fetchDashboardPosts } from "../utils";

export const prerender = true;

export const load: LayoutLoad = async ({ parent }) => {
  const parentData = await parent();

  try {
    const [posts, blocks, builders, dashboard] = await Promise.all([fetchMarkdownPosts(), fetchBlocksMarkdownPosts(), fetchBuilders(), fetchDashboardPosts()]);

    return {
      ...parentData,
      posts,
      blocks,
      builders,
      dashboard
    };
  } catch (error) {
    console.error(`Error in load function for /blocks: ${error}`);
    return {
      ...parentData,
      posts: {},
      blocks: {},
      builders: [],
      dashboard: []
    };
  }
};
