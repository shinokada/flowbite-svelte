<script lang="ts">
  import MetaTag from "../../utils/MetaTag.svelte";
  import SectionHeader from "../utils/SectionHeader.svelte";
  import SectionCompo from "../utils/Sectioncompo.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const title = "Marketing UI - Flowbite Svelte Blocks";
  const breadcrumb_title = "Marketing";
  const dir = "marketing";
  const pkg = "Flowbite Svelte Blocks";
  const description = "Get started with a large collection of free UI components built with Tailwind CSS and the Flowbite library featuring hero sections, headers, contact forms, and more.";
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} {pkg} />

<div class="max-w-8xl mx-auto px-4 pt-8 lg:px-20">
  <SectionHeader category="marketing" {breadcrumb_title} {title} {description} />
  <div id="mainContent">
    <SectionCompo {data} section="marketing" />
  </div>
</div>
