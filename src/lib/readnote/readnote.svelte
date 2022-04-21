<script lang="ts">
	import type { BaseDef } from '$lib/stores/notesStore';
	import { todos } from '$lib/stores/notesStore';
	import frontmatter from '@bytemd/plugin-frontmatter';
	import gemoji from '@bytemd/plugin-gemoji';
	import gfm from '@bytemd/plugin-gfm';
	import highlight from '@bytemd/plugin-highlight';
	import mermaid from '@bytemd/plugin-mermaid';
	import { Viewer } from 'bytemd';
	const plugins = [gfm(), frontmatter(), gemoji(), highlight(), mermaid()];
	const removeTodo = (node: HTMLButtonElement, thisId: string) => {
		node.addEventListener('click', () => {
			todos.update((t) => t.filter(({ id }) => thisId !== id));
		});
	};

	export let note: BaseDef;
</script>

<input type="checkbox" id={note.id} class="modal-toggle" />
<div class="modal">
	<div class="modal-box prose relative max-w-fit prose-headings:underline prose-a:text-accent">
		<label for={note.id} class="btn btn-circle btn-sm absolute right-2 top-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</label>
		<h3 class="text-xl font-bold uppercase md:text-3xl">{note.name}</h3>
		<p class="text-sm">{note.date}</p>
		<div class="p-5">
			<Viewer value={note.content} {plugins} />
		</div>
		<div class="modal-action">
			<button use:removeTodo={note.id} class="btn btn-ghost space-x-1">
				<span>remove</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-red-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
					/>
				</svg>
			</button>
			<a href={'/note/' + note.id} class="btn btn-ghost">Edit</a>
		</div>
	</div>
</div>
