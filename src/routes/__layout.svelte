<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import "../app.css";
</script>

<Header />

<main class="relative top-16 overflow-auto">
	<slot />
</main>

<style>
	main {
		height: 83vh;
	}
</style>
