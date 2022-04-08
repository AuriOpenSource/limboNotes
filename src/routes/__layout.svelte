<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import "../app.css";

	let user: Record<string, string | boolean> = {login: true}
</script>

{#if user.login}
	<Header />
{/if}

<main class="relative top-14 overflow-auto">
	<slot />
</main>

<style>
	main {
		height: 90vh;
	}
</style>
