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
    <ul class="ml-3 text-primary">
      {#each note.content.slice(0, 2) as todo, idx}
        <li
          id="li"
          class:done={todo.done}
          class="text-sm flex place-items-center my-2"
        >
          <input
            type="checkbox"
            class="checkbox checkbox-xs checkbox-primary"
            bind:checked={todo.done}
            disabled
          />
          <span class="text-secondary mx-2" class:risk={todo.done}
            >{todo.text}</span
          >
        </li>
      {/each}
      <li id="li" class="text-sm flex place-items-center">
        <input
          type="checkbox"
          class="checkbox checkbox-xs checkbox-primary"
          disabled
        />
        <span class="text-base-content mx-2">...</span>
      </li>
    </ul>
  </div>
</div>

<style>
  .done {
    opacity: 0.8;
  }
  .risk {
    text-decoration: line-through;
  }
</style>
