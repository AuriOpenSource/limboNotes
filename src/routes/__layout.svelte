<script lang="ts">
	import Nav from '$lib/header/Nav.svelte';
	import '../app.css';
	import 'bytemd/dist/index.css';

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

<main>
	<slot />
</main>
