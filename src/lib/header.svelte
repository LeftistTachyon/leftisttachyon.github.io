<script lang="ts">
  import { headerHeight } from "./stores";

  type Icon = { href: string; src: string };

  const icons: Icon[] = [
    { href: "https://github.com/LeftistTachyon", src: "/icons/github.svg" },
    {
      href: "https://www.linkedin.com/in/jed-wang/",
      src: "/icons/linkedin.svg",
    },
    { href: "https://calendly.com/jed-wang", src: "/icons/calendly.svg" },
    { href: "#", src: "/icons/resume.svg" },
  ];

  let header: number;

  $: headerHeight.set(header);
</script>

<div id="header" bind:clientHeight={header}>
  <h1>Jed Wang</h1>
  <div class="spacer" />

  {#each icons as icon}
    <div class="icon-container">
      <a href={icon.href}>
        <img height={30} src={icon.src} alt="" />
      </a>
    </div>
  {/each}
</div>

<style>
  #header {
    display: flex;
    padding: 0 2em;
    background: var(--bg-theme-color);

    position: sticky;
    top: 0;
    z-index: 1;
  }
  .spacer {
    flex: 1;
  }

  .icon-container {
    display: flex;
    align-items: center;
  }
  .icon-container:not(:last-of-type) {
    margin-right: 1em;
  }

  h1 {
    /* color: white; */
    font-weight: bold;
  }
</style>
