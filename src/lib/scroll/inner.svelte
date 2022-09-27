<script lang="ts">
  let self: HTMLDivElement;
  function handleScroll(e: Event) {
    console.log({
      offset: self.offsetTop,
    });
  }
</script>

<div bind:this={self} />

<svelte:window on:scroll={handleScroll} />

<style>
  div {
    min-height: 50vh;
    background: yellow;
    position: sticky;
    top: 0;
  }
</style>
