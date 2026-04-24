<script lang="ts">
  import { Button, Tags } from "flowbite-svelte";
  let tags: string[] = $state([]);
  let tags2: string[] = $state([]);
  const handleClick = () => {
    alert(`Submitted: ${tags}`);
  };
  const handleClick2 = () => {
    alert(`Submitted: ${tags2}`);
  };
</script>

<form>
  <Tags class="mt-5 mb-3" bind:value={tags} />
  {#if tags.length > 0}
    <pre class="dark:text-white">{JSON.stringify(tags, null, 2)}</pre>
  {/if}
  <Button onclick={handleClick}>Submit</Button>
</form>

<form>
  <Tags class="mt-5 mb-3" bind:value={tags2} />
  {#if tags2.length > 0}
    <pre class="dark:text-white">{JSON.stringify(tags2, null, 2)}</pre>
  {/if}
  <Button onclick={handleClick2}>Submit</Button>
</form>
