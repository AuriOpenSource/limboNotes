<script lang="ts">
  import type { BaseDef } from "$lib/stores/notesStore";

  export let note: BaseDef;
</script>

<div
  class="card cursor-pointer border-l-4 border-secondary bg-base-100 shadow-md duration-200 hover:-translate-y-1 hover:bg-base-200"
>
  <div class="card-body">
    <h3 class="card-title">{note.name}</h3>
    <p class="text-2xs">Generated in {note.date}</p>
    <ul class="ml-3 text-primary">
      {#each note.content.slice(0, 2) as todo, idx}
        <li
          id="li"
          class:done={todo.done}
          class="my-2 flex place-items-center text-sm"
        >
          <input
            type="checkbox"
            class="checkbox checkbox-primary checkbox-xs"
            bind:checked={todo.done}
            disabled
          />
          <span class="mx-2 text-secondary" class:risk={todo.done}
            >{todo.text}</span
          >
        </li>
      {/each}
      <li id="li" class="flex place-items-center text-sm">
        <input
          type="checkbox"
          class="checkbox checkbox-primary checkbox-xs"
          disabled
        />
        <span class="mx-2 text-base-content">...</span>
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
