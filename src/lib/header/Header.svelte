<script lang="ts">
	import { page } from '$app/stores';
	import Search from '../search/search.svelte';
	
</script>

<header class="fixed border-b-2 border-primary py-1 w-full h-auto flex place-items-center justify-between z-40 bg-base-100">
	<div class="grid grid-cols-2">
		<div class="border-b-2 border-primary w-full hover:bg-base-300 ml-2">
			<a href="" class="mx-2">notes</a>
		</div>
		<div class="border-b-2 border-none w-full hover:bg-base-300 ml-2">
			<a href="" class="mx-2">categorys</a>
		</div>
	</div>
	<Search/>
</header>

<style>
	
</style>
