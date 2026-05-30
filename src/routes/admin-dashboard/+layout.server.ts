import type { LayoutServerLoad } from "./$types";
import { fetchMarkdownPosts, fetchBuilders, fetchBlocksMarkdownPosts, fetchDashboardPosts } from "../utils";

export const prerender = false;

export const load: LayoutServerLoad = async () => {
  try {
    const [posts, blocks, builders, dashboard] = await Promise.all([fetchMarkdownPosts(), fetchBlocksMarkdownPosts(), fetchBuilders(), fetchDashboardPosts()]);
    return { posts: { posts, blocks, builders, dashboard } };
  } catch (error) {
    console.error(`Error in load function for /admin-dashboard: ${error}`);
    return { posts: { posts: {}, blocks: {}, builders: [], dashboard: [] } };
  }
};
