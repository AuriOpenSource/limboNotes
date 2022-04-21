<script lang="ts">
  import { onMount } from "svelte";

  const links = [
    ["/", "home", false],
    ["/notes", "notes", false],
  ];

  onMount(() => {
    links.forEach((e, i) => {
      if (links[i][0] == self.location.pathname) links[i][2] = true;
    });
  });

  function underline() {
    const { index } = this.dataset;

    links.forEach((e, i) => {
      links[i][2] = false;
    });
    links[index][2] = true;
  }
</script>

<div class="inline-flex">
  {#each links as [path, name, activate], id}
    <a
      href={path}
      data-index={id}
      on:click={underline}
      class:a={activate}
      class="btn btn-ghost"
    >
      {name}
    </a>
  {/each}
</div>

<style>
  :root {
    --directionRight: 100%;
    --directionLeft: -100%;
    --direction: 0;
  }
  * {
    box-sizing: border-box;
  }

  a {
    position: relative;
  }

  /* Fade in */
  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: hotpink;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  a:hover::after {
    opacity: 1;
  }

  /* Slide in */
  a {
    overflow: hidden;
  }

  a::after {
    opacity: 1;
    transform: translate3d(-101%, 0, 0);
  }
  .a::after {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  a:hover::after {
    transform: translate3d(0, 0, 0);
  }
</style>
