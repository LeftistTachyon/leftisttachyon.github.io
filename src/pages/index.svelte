<script lang="ts">
  import ScrollContainer from "@lib/scroll/scroll-container.svelte";
  import { beforeUpdate } from "svelte";

  let sidebar: HTMLDivElement,
    progress = 0;
  let top = 0;

  beforeUpdate(() => {
    top = sidebar
      ? sidebar.clientWidth * 0.2 +
        progress * (sidebar.clientHeight - sidebar.clientWidth)
      : 0;
  });
</script>

<main>
  <h1>Welcome to my webpage!</h1>

  <div class="extra" />
  <div class="hstack dual-outer">
    <ScrollContainer let:progress width="90%">
      <div class="hstack">
        <div class="black">progress: {progress}</div>
        <div class="white">progress: {progress}</div>
        <div class="black">progress: {progress}</div>
        <div class="white">progress: {progress}</div>
      </div>
    </ScrollContainer>
    <ScrollContainer scroll={false} bind:progress width="10%">
      <div class="yellow" bind:this={sidebar}>
        <div class="square" style="rotate:{720 * progress}deg;top:{top}px" />
      </div>
    </ScrollContainer>
  </div>
  <div class="extra" />
</main>

<style>
  .extra {
    min-height: 60vh;
  }
  .hstack {
    display: flex;
  }
  .black {
    background: black;
    color: white;
    min-width: 50vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .white {
    background: white;
    color: black;
    min-width: 50vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .yellow {
    background: yellow;
    color: black;
    width: 10vw;
    height: 100vh;
  }
  .square {
    background: red;
    width: 60%;
    aspect-ratio: 1;
    position: absolute;
    left: 20%;
  }
</style>
