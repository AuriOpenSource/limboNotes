<script lang="ts">
  import type { BaseDef } from "$lib/stores/notesStore";

  export let note: BaseDef;
</script>

<div
  class="card cursor-pointer border-l-4 border-secondary bg-base-100  shadow-md duration-200 hover:-translate-y-1 hover:bg-base-200"
>
  <div class="card-body">
    <h3 class="card-title">{note.name}</h3>
    <p class="text-2xs">Generated in {note.date}</p>
    <p class="text-sm">{note.content.slice(0, 25) + "..."}</p>
  </div>
</div>
