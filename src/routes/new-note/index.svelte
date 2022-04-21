<script lang="ts">
	import { goto } from '$app/navigation';
	import { todos, type BaseDef } from '$lib/stores/notesStore';
	import frontmatter from '@bytemd/plugin-frontmatter';
	import gemoji from '@bytemd/plugin-gemoji';
	import gfm from '@bytemd/plugin-gfm';
	import highlight from '@bytemd/plugin-highlight';
	import mermaid from '@bytemd/plugin-mermaid';
	import { v4 as uuid } from '@lukeed/uuid';
	import { Editor, Viewer } from 'bytemd';
	let title = '';
	let value = '';

	const plugins = [gfm(), frontmatter(), gemoji(), highlight(), mermaid()];
	function handleChange(e) {
		value = e.detail.value;
		console.log(value);
	}

	function newNote() {
		todos.update((n) => {
			const newNote: BaseDef = {
				name: title,
				content: value,
				id: uuid(),
				date: '23/12'
			};
			localStorage.setItem('notes', JSON.stringify([newNote, ...n]));
			return [newNote, ...n];
		});
		goto('/');
	}
</script>

<div class="hero min-h-screen bg-base-100">
	<div class="hero-content w-full flex-col lg:flex-row-reverse">
		{#if value}
			<div class="card w-1/2 bg-base-200 shadow-2xl">
				<div class="card-body prose max-h-[30rem] overflow-y-scroll">
					<h1 class="cart-title">{title}</h1>
					<p class="py-6"><Viewer {value} {plugins} /></p>
				</div>
			</div>
		{/if}

		<div class="card w-1/2 flex-shrink-0 bg-base-200 shadow-2xl">
			<div class="card-body">
				<input type="text" bind:value={title} />
				<Editor {value} {plugins} on:change={handleChange} />

				<div class="form-control mt-6">
					<button on:click={newNote} class="btn btn-primary">add note +</button>
				</div>
			</div>
		</div>
	</div>
</div>
