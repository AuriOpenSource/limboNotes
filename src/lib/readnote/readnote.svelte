<script lang="ts">
  import type { BaseDef } from "$lib/stores/notesStore";

  export let note: BaseDef;
</script>

<input type="checkbox" id={note.id} class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for={note.id} class="btn btn-sm btn-circle absolute right-2 top-2">
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
    <h3 class="text-lg font-bold">{note.name}</h3>
    <p class="text-sm">{note.date}</p>
    <div class="p-5">
      {#if note.type === "note"}
        <slot name="note">{note.content}</slot>
      {:else if note.type === "array"}
        <slot name="list">
          <ol class="ml-3 text-primary" style="list-style-type: disc;">
            {#each note.content.slice(0, 2) as item}
              <li class="text-sm">
                <span class="text-base-content">
                  {item}
                </span>
              </li>
            {/each}
          </ol>
        </slot>
      {:else if note.type === "todo"}
        <slot name="todo">
          <ul class="ml-3 text-primary">
            {#each note.content.slice(0, 2) as todo}
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
          </ul>
        </slot>
      {/if}
    </div>
    <div class="modal-action">
      <a href={"/note/" + note.id} class="btn btn-ghost">Edit</a>
    </div>
  </div>
</div>
