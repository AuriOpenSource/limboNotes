<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Cards from '$lib/cards/cards.svelte';
	import { todos } from '$lib/stores/notesStore';
</script>

<svelte:head>
	<title>Limbo - Notes</title>
</svelte:head>

<section>
	<Cards todos={$todos} />
	<Button />
</section>
