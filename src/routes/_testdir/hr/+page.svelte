<script lang="ts">
  import { Drawer, Hr, Button } from "flowbite-svelte";
  import { ServerOutline } from "flowbite-svelte-icons";

  let open = false;
  let modbusHostAddress = "address";
  let modbusPort = "heartbeat.modbus_port";
</script>

Hello
<div class="text-center">
  <Button onclick={() => (open = true)}>Show drawer</Button>
</div>
<Drawer bind:open aria-labelledby="drawer-label">
  <h5 id="drawer-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
    <ServerOutline class="me-2.5 h-5 w-5" />Modbus status
  </h5>
  <div class="flex">
    <p class="font-bold text-black dark:text-white">Status:</p>
    <p class={"pl-1 text-green-600 dark:text-green-400"}>modbusState</p>
  </div>
  <Hr class="my-2" />

  <div class="flex">
    <p class="font-bold text-black dark:text-white">Data age:</p>
    <p class="pl-1 font-light text-black dark:text-white">50s</p>
  </div>
  <Hr class="my-2" />

  <div class="flex">
    <p class="font-bold text-black dark:text-white">Host address:</p>
    <p class="pl-1 font-light text-black dark:text-white">{modbusHostAddress}</p>
  </div>
  <Hr class="my-2" />
  <div class="flex">
    <p class="font-bold text-black dark:text-white">Host port:</p>
    <p class="pl-1 font-light text-black dark:text-white">
      {modbusPort}
    </p>
  </div>
  <Hr class="my-2" />
</Drawer>
