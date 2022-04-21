<script lang="ts">
	import type { BaseDef } from '$lib/stores/notesStore';

	export let note: BaseDef;
</script>

<div
	class="card cursor-pointer border-l-4 border-secondary bg-base-100  shadow-md duration-200 hover:bg-base-200"
>
	<div class="card-body">
		<h3 class="card-title">{note.name}</h3>
		<p class="text-2xs">Generated in {note.date}</p>
		<div class="card-action">
			<label class="btn btn-ghost" for={note.id}>open note</label>
		</div>
	</div>
</div>
