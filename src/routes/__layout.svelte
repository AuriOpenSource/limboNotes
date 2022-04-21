<script lang="ts">
  import Nav from "$lib/header/Nav.svelte";
  import "../app.css";

  let user: Record<string, string | boolean> = { login: true };
</script>

<header>
  {#if user.login}
    <Nav />
  {/if}
</header>

<svelte:head>
  <title>Limbo</title>
</svelte:head>

<main class="grid place-items-center">
  <slot />
</main>
