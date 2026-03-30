<script lang="ts">
  import { Toast } from "flowbite-svelte";
</script>

<Toast classes={{ content: "w-full text-sm font-normal flex items-center justify-between" }}>
  Conversation archived.
  <a class="text-fg-brand hover:bg-brand-soft ms-auto rounded-lg p-1.5 font-medium" href="/">Undo</a>
</Toast>
