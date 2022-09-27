<script lang="ts">
  export let top = 0,
    scroll = true,
    height = "200vh";

  let inner: HTMLDivElement, outer: HTMLDivElement;
  let ratio = 0;
  function handleScroll() {
    const scrollableHeight = outer.clientHeight - inner.clientHeight,
      scrollableWidth = inner.scrollWidth - inner.clientWidth;

    ratio = inner.offsetTop / scrollableHeight;
    // console.log({ ratio });

    if (scroll) inner.scrollLeft = scrollableWidth * ratio;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<div id="outer" bind:this={outer} style="height:{height}">
  <div id="inner" bind:this={inner} style="top:{top}px">
    <slot progress={ratio} />
  </div>
</div>

<style>
  #inner {
    min-height: 100vh;
    position: sticky;
    overflow-x: hidden;
  }
  #outer {
    position: relative;
  }
</style>
