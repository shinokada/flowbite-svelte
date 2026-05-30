<script lang="ts">
  import MetaTag from "../../utils/MetaTag.svelte";
  import SectionHeader from "../utils/SectionHeader.svelte";
  import SectionCompo from "../utils/Sectioncompo.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const title = "Application UI - Flowbite Svelte Blocks";
  const breadcrumb_title = "Application";
  const dir = "application";
  const pkg = "Flowbite Svelte Blocks";
  const description = "Get started with a collection of free Tailwind CSS UI components for admin dashboard layouts, sidebars, charts, widgets, kanban boards, and more.";
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} {pkg} />

<div class="max-w-8xl mx-auto px-4 pt-8 lg:px-20">
  <SectionHeader category="application" {breadcrumb_title} {title} {description} />
  <div id="mainContent">
    <SectionCompo {data} section="application" />
  </div>
</div>
