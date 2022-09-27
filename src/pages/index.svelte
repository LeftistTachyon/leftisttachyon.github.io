<script lang="ts">
  import Outer from "@lib/scroll/outer.svelte";
  import Inner from "@lib/scroll/inner.svelte";
  console.log("Jello");
</script>

<main>
  <h1>Welcome to my webpage!</h1>

  <Outer>
    <Inner />
  </Outer>
  <Outer />
</main>
