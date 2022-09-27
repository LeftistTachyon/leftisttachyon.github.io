<script lang="ts">
  import Outer from "@lib/scroll/outer.svelte";
  console.log("Jello");
</script>

<main>
  <h1>Welcome to my webpage!</h1>

  <div class="extra" />
  <Outer top={100}>
    <div class="hstack" let:progress={ratio}>
      <div class="black">ratio: {ratio}</div>
      <div class="white">ratio: {ratio}</div>
      <div class="black">ratio: {ratio}</div>
      <div class="white">ratio: {ratio}</div>
    </div>
  </Outer>
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
    min-height: 100px;
  }
  .white {
    background: white;
    color: black;
    min-width: 50vw;
    min-height: 100px;
  }
</style>
