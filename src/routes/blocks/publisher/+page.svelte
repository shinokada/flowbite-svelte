<script lang="ts">
  import MetaTag from "../../utils/MetaTag.svelte";
  import SectionHeader from "../utils/SectionHeader.svelte";
  import SectionCompo from "../utils/Sectioncompo.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const title = "Publisher UI - Flowbite Svelte Blocks";
  const breadcrumb_title = "Publisher";
  const dir = "publisher";
  const pkg = "Flowbite Svelte Blocks";
  const description = "Get started with a collection of free Tailwind CSS UI components for publishing blog posts, articles, comment sections, sidebar widgets, and more.";
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} {pkg} />

<div class="max-w-8xl mx-auto px-4 pt-8 lg:px-20">
  <SectionHeader category="publisher" {breadcrumb_title} {title} {description} />
  <div id="mainContent">
    <SectionCompo {data} section="publisher" />
  </div>
</div>
