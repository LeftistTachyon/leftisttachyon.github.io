<script lang="ts">
  // Readouts
  let stdReadout: HTMLSpanElement,
    stdStdDevReadout: HTMLSpanElement,
    flickReadout: HTMLSpanElement,
    flickStdDevReadout: HTMLSpanElement,
    diffReadout: HTMLSpanElement,
    diffStdDevReadout: HTMLSpanElement;

  // Standard reaction time
  let stdStart: HTMLButtonElement, stdArea: HTMLDivElement;
  let stdSum = 0,
    stdAttempts = 0,
    stdToGo = 0,
    stdLastFlashed = null,
    stdSum2 = 0,
    stdStdDev = 0;

  // to start test
  function startStd() {
    stdStart.disabled = true;
    stdToGo = 5;

    // reset test
    stdArea.style.backgroundColor = "darkblue";

    // prepare flash
    setTimeout(() => {
      stdArea.style.backgroundColor = "yellow";
      stdLastFlashed = new Date().getTime();
    }, 2000 + Math.random() * 5000);
  }

  function stdReaction() {
    if (stdLastFlashed) {
      // update data
      let time = new Date().getTime() - stdLastFlashed;
      console.log(`std: ${time} ms`);
      stdSum += time;
      stdSum2 += time * time;
      stdLastFlashed = null;
      stdAttempts++;

      // update readouts
      let stdAvg = stdSum / stdAttempts;
      stdReadout.innerHTML = String(Math.round(stdAvg));
      let variance = stdSum2 / stdAttempts - stdAvg * stdAvg;
      stdStdDev = Math.sqrt(variance) / stdAttempts;
      stdStdDevReadout.innerHTML = String(Math.round(stdStdDev));
      updateDiffReadout();

      if (--stdToGo) {
        console.log(stdToGo + " to go!");
        startStd();
      } else {
        stdArea.style.backgroundColor = "transparent";
        stdStart.disabled = false;
      }
    }
  }

  // Flick reaction time
  let flickStart: HTMLButtonElement, flickArea: HTMLDivElement;
  let flickSum = 0,
    flickAttempts = 0,
    flickToGo = 0,
    flickLastFlashed = null,
    flickSum2 = 0,
    flickStdDev = 0;

  // to start test
  function startFlick() {
    flickStart.disabled = true;
    flickToGo = 5;

    // reset test
    flickArea.style.backgroundColor = "darkblue";

    // prepare flash
    setTimeout(() => {
      flickArea.style.backgroundColor = "yellow";
      flickLastFlashed = new Date().getTime();
    }, 2000 + Math.random() * 5000);
  }

  function mouseFlicked() {
    if (flickLastFlashed) {
      // update data
      let time = new Date().getTime() - flickLastFlashed;
      console.log(`flick: ${time} ms`);
      flickSum += time;
      flickSum2 += time * time;
      flickLastFlashed = null;
      flickAttempts++;

      // update readouts
      let flickAvg = flickSum / flickAttempts;
      flickReadout.innerHTML = String(Math.round(flickAvg));
      let variance = flickSum2 / flickAttempts - flickAvg * flickAvg;
      flickStdDev = Math.sqrt(variance) / flickAttempts;
      flickStdDevReadout.innerHTML = String(Math.round(flickStdDev));
      updateDiffReadout();

      if (--flickToGo) {
        startFlick();
      } else {
        flickArea.style.backgroundColor = "transparent";
        flickStart.disabled = false;
      }
    }
  }

  function updateDiffReadout() {
    if (stdAttempts && flickAttempts) {
      diffReadout.innerHTML = String(
        Math.round(Math.abs(flickSum / flickAttempts - stdSum / stdAttempts))
      );
      diffStdDevReadout.innerHTML = String(
        Math.round(Math.hypot(stdStdDev, flickStdDev))
      );
    }
  }
</script>

<svelte:body on:keydown={stdReaction} />

<main>
  <div class="body">
    <h1 style="margin-bottom:15px">
      Click vs Flick <i style="font-size:0.5em">by LeftistTachyon</i>
    </h1>
    <p>
      A little thing I wrote to test the differences in reaction time and
      hardware lag between clicking and flicking the mouse.
    </p>
    <div id="container">
      <div class="container-text">
        <h2>Standard reaction test</h2>
        <p>
          This will test your reaction time to a changing color with a click. In
          other words, when you see the color change, click your mouse as soon
          as possible.<br />
          If you prefer to use your keyboard, you can press any key instead of clicking.
        </p>
        <p>
          Click on the button and move your mouse into the outlined box below to
          start.
        </p>
      </div>
      <div class="container-text">
        <h2>Flick reaction test</h2>
        <p>
          This will test your reaction time to a changing color with a flick. In
          other words, when you see the color change, flick your mouse away from
          where it was as soon as possible. It's important to keep your mouse
          still until the color changes!
        </p>
        <p>
          Click on the button and move your mouse into the outlined box below to
          start.
        </p>
      </div>
      <button class="start-button" on:click={startStd} bind:this={stdStart}>
        Start
      </button>
      <button class="start-button" bind:this={flickStart} on:click={startFlick}
        >Start</button
      >
      <div class="area" bind:this={stdArea} on:click={stdReaction} />
      <div class="area" bind:this={flickArea} on:mousemove={mouseFlicked} />
      <div class="container-text" style="align-items:center">
        <p>Standard reaction time:</p>
        <h3>
          <span bind:this={stdReadout}>?</span>&pm;<span
            bind:this={stdStdDevReadout}>?</span
          >
          ms
        </h3>
      </div>
      <div class="container-text" style="align-items:center">
        <p>Flick reaction time:</p>
        <h3>
          <span bind:this={flickReadout}>?</span>&pm;<span
            bind:this={flickStdDevReadout}>?</span
          > ms
        </h3>
      </div>
    </div>
    <div id="bottom-readout">
      <p style="margin-right:0.5em">Reaction time difference:</p>
      <h2>
        <span bind:this={diffReadout}>?</span>&pm;<span
          bind:this={diffStdDevReadout}>?</span
        >
        ms
      </h2>
    </div>
  </div>
  <footer>
    <p>Made with ♥ by LeftistTachyon</p>
    <p>Check out <a href="https://github.com/LeftistTachyon">my GitHub</a>!</p>
  </footer>
</main>

<style>
  * {
    box-sizing: border-box;
    font-family: "Segoe UI", sans-serif;
    margin: 0;
  }
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .body {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2em 2em 0.5em;
  }
  .body > * {
    margin-bottom: 10px;
  }
  #container {
    border: 1px solid black;
    min-height: 100px;
    width: 100%;
    padding: 1.5em;
    flex: 1;
    display: grid;
    gap: 0.75em;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content auto min-content;
  }
  #container > .container-text {
    display: flex;
    flex-direction: column;
  }
  #container > .container-text > * {
    margin-bottom: 0.5em;
  }
  .start-button {
    text-align: center;
    padding: 0.5em;
    border-radius: 9999px;
    border: 0;
  }
  .start-button:hover:not(:disabled) {
    background-color: #e0e0e0;
  }
  .start-button:active:not(:disabled) {
    background-color: #c0c0c0;
  }
  .area {
    border: 1px solid black;
    min-height: 40px;
  }
  #bottom-readout {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  }
  footer {
    display: flex;
    justify-content: space-between;
    font-style: italic;
    margin-bottom: 0;
    background-color: #f0f0f0;
    padding: 0.5em;
  }
</style>
