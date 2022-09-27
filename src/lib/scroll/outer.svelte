<script lang="ts">
  export let top = 0,
    scroll = true,
    height = "200vh",
    width = "100vw";

  let inner: HTMLDivElement, outer: HTMLDivElement;
  export let progress = 0;
  function handleScroll() {
    const scrollableHeight = outer.clientHeight - inner.clientHeight,
      scrollableWidth = inner.scrollWidth - inner.clientWidth;

    progress = inner.offsetTop / scrollableHeight;
    // console.log({ ratio });

    if (scroll) inner.scrollLeft = scrollableWidth * progress;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<div id="outer" bind:this={outer} style="height:{height};width:{width}">
  <div id="inner" bind:this={inner} style="top:{top}px">
    <slot {progress} />
  </div>
</div>

<style>
  #inner {
    position: sticky;
    overflow-x: hidden;
  }
  #outer {
    position: relative;
    overflow-x: visible;
  }
</style>
