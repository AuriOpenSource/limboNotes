<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, stagger } from 'motion';
	import List from './layout/list.svelte';
	import Note from './layout/note.svelte';
	import Todo from './layout/todo.svelte';
	import type { BaseDef } from '$lib/stores/notesStore';
	import Readnote from '$lib/readnote/readnote.svelte';

	export let todos: BaseDef[];

	onMount(() => {
		const animation = animate(
			'#li',
			{
				opacity: [0, 1],
				x: [-20, 0]
			},
			{
				duration: 0.5,
				delay: stagger(0.05, { opacity: [0, 1] }, { easing: 'ease-out' })
			}
		);
	});
</script>

<ul class="grid grid-cols-1 gap-3 p-4 md:grid-cols-2 lg:grid-cols-4">
	{#each todos as note (note.id)}
		<li>
			<Note {note} />
		</li>

		<Readnote {note} />
	{/each}
</ul>
