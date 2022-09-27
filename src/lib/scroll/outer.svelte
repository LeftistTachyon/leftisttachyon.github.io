<script lang="ts">
  export let top = 0;
  let inner: HTMLDivElement, outer: HTMLDivElement;
  let ratio = 0;
  function handleScroll() {
    const scrollableHeight = outer.clientHeight - inner.clientHeight,
      scrollableWidth = inner.scrollWidth - inner.clientWidth;

    ratio = inner.offsetTop / scrollableHeight;
    console.log({ ratio });

    inner.scrollLeft = scrollableWidth * ratio;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<p>ratio: {ratio}</p>
<div id="outer" bind:this={outer}>
  <div id="inner" bind:this={inner} style="top:{top}px">
    <slot progress={ratio} />
  </div>
</div>

<style>
  #inner {
    min-height: 50vh;
    background: yellow;
    position: sticky;
    overflow-x: hidden;
  }
  #outer {
    border: 1px solid red;
    min-height: 150vh;
    position: relative;
  }
</style>
