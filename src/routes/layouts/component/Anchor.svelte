<script lang="ts" module>
  import type { LinkType } from "$lib/types";

  const getText = (node: Node) => {
    const text = [...node.childNodes].find((child) => child.nodeType === Node.TEXT_NODE);
    return (text && text.textContent?.trim()) || "";
  };

  export function extract(x: HTMLElement): LinkType {
    if (x.firstElementChild) return { rel: x.tagName, href: "#" + x.firstElementChild?.id, name: getText(x) };
    return { name: "" };
  }
</script>

<script lang="ts">
  import { twMerge } from "tailwind-merge";

  // `id` may be passed from the rehype/remark heading plugin via restProps
  let { children, tag, class: className, id: ssrId = "", ...restProps } = $props();

  let content: string = $state("");
  // Use ssrId from the remark plugin as the initial value for SSR/prerender;
  // use:init overwrites it with the DOM-text-computed slug on the client.
  let slug: string = $derived(content ? content.replace(/\s/g, "-").toLocaleLowerCase() : ssrId);

  function init(node: HTMLElement) {
    content = getText(node);
  }

  let elemClass = $derived(twMerge("relative group", className));
</script>

<svelte:element this={tag} {...restProps} class={elemClass} use:init>
  {@render children()}
  <span id={slug} class="absolute -top-[140px]"></span>
  <a class="text-primary-700 dark:text-primary-700 ms-2 opacity-0 transition-opacity group-hover:opacity-100" href="#{slug}" aria-label="Link to this section: {content}">#</a>
</svelte:element>
