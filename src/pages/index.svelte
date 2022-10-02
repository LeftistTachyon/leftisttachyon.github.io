<script lang="ts">
  import Header from "@lib/header.svelte";
  import ScrollContainer from "@lib/scroll/scroll-container.svelte";
  import { headerHeight } from "@lib/stores";

  let sidebar: HTMLDivElement,
    progress = 0;
  let top = 0,
    height = "100vh";
  $: height = `calc(100vh - ${$headerHeight}px)`;
  $: top = sidebar
    ? sidebar.clientWidth * 0.2 +
      progress * (sidebar.clientHeight - sidebar.clientWidth)
    : 0;
</script>

<Header />
<main>
  <h1>Welcome to my webpage!</h1>

  <div class="hstack dual-outer">
    <ScrollContainer let:progress top={$headerHeight} width="90%">
      <div class="hstack">
        <div class="black" style="height:{height}">
          progress: {progress}
        </div>
        <div class="white" style="height:{height}">
          progress: {progress}
        </div>
        <div class="black" style="height:{height}">
          progress: {progress}
        </div>
        <div class="white" style="height:{height}">
          progress: {progress}
        </div>
      </div>
    </ScrollContainer>
    <ScrollContainer
      scroll={false}
      bind:progress
      top={$headerHeight}
      width="10%"
    >
      <div class="yellow" style="height:{height}" bind:this={sidebar}>
        <div class="square" style="rotate:{720 * progress}deg;top:{top}px" />
      </div>
    </ScrollContainer>
  </div>
</main>

<style>
  .hstack {
    display: flex;
  }
  .black {
    background: black;
    color: white;
    min-width: 50vw;
    /* height: 100vh; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .white {
    background: white;
    color: black;
    min-width: 50vw;
    /* height: 100vh; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .yellow {
    background: yellow;
    color: black;
    width: 10vw;
    /* height: 100vh; */
  }
  .square {
    background: red;
    width: 60%;
    aspect-ratio: 1;
    position: absolute;
    left: 20%;
  }
</style>
