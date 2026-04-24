<script lang="ts">
  let { children } = $props();
</script>

<div class="m-4 mx-auto min-h-screen max-w-7xl space-y-4 p-4">
  {@render children()}
</div>
