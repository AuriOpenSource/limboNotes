<script lang="ts">
	import Card from "../lib/card/card.svelte";
</script>

<svelte:head>
	<title>Notes</title>
</svelte:head>

<section id="section" class="relative top-14 px-3 overflow-auto">
	<Card/>
</section>

<style>
	#section {
		height: 85vh;
	}
</style>
