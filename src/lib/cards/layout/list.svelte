<script lang="ts">
  import type { BaseDef } from "$lib/stores/notesStore";

  export let note: BaseDef;
</script>

<div
  class="card border-l-4 border-secondary shadow-md bg-base-100 hover:bg-base-200 hover:-translate-y-1 duration-200 cursor-pointer"
>
  <div class="card-body">
    <h3 class="card-title">{note.name}</h3>
    <p class="text-2xs">Generated in {note.date}</p>
    <ol class="ml-3 text-primary" style="list-style-type: disc;">
      {#each note.content.slice(0, 2) as item}
        <li class="text-sm">
          <span class="text-base-content">
            {item.slice(0, 25)}
          </span>
        </li>
      {/each}
      <li class="text-sm">
        <span class="text-base-content">...</span>
      </li>
    </ol>
  </div>
</div>
