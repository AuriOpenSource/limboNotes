<script context="module" lang="ts">
	import type { LoadInput } from '@sveltejs/kit';
	export async function load({ params }: LoadInput) {
		return {
			props: {
				noteId: params.id
			}
		};
	}
</script>

<script>
	import { Editor, Viewer } from 'bytemd';
	import gfm from '@bytemd/plugin-gfm';
	import frontmatter from '@bytemd/plugin-frontmatter';
	import gemoji from '@bytemd/plugin-gemoji';
	import highlight from '@bytemd/plugin-highlight';
	import mermaid from '@bytemd/plugin-mermaid';
	let value;
	const plugins = [gfm(), frontmatter(), gemoji(), highlight(), mermaid()];

	function handleChange(e) {
		value = e.detail.value;
		console.log(value);
	}
</script>

<div class="prose p-5">
	<Editor {value} {plugins} on:change={handleChange} />
	<div class="divider" />
	{#if value}
		<div class="prose-xl bg-base-200 p-5">
			<Viewer {value} {plugins} />
		</div>
	{/if}
</div>
