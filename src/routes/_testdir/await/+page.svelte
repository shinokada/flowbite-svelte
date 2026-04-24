<script>
  import { Navbar, NavLi, NavUl, Heading } from "flowbite-svelte";
  async function getText() {
    return new Promise((res) => {
      setTimeout(() => res("Hello world"), 1000);
    });
  }
</script>

<div class="p-8">
  <Navbar>
    <NavUl>
      <NavLi href="/">Home</NavLi>
    </NavUl>
  </Navbar>
  <Heading tag="h1" class="my-4">Hello Playground</Heading>
  <p>{await getText()}</p>
</div>
