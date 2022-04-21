<script lang="ts">
  import { onMount } from "svelte";
  import { animate, stagger } from "motion";
  import List from "./layout/list.svelte";
  import Note from "./layout/note.svelte";
  import Todo from "./layout/todo.svelte";
  import type { BaseDef } from "$lib/stores/notesStore";
  import Readnote from "$lib/readnote/readnote.svelte";

  export let todos: BaseDef[];

  onMount(() => {
    const animation = animate(
      "#li",
      {
        opacity: [0, 1],
        x: [-20, 0],
      },
      {
        duration: 0.5,
        delay: stagger(0.05, { opacity: [0, 1] }, { easing: "ease-out" }),
      }
    );
  });
</script>

<ul class="grid grid-cols-1 gap-3 p-4 md:grid-cols-2 lg:grid-cols-4">
  {#each todos as note (note.id)}
    <li>
      {#if note.type === "note"}
        <label for={note.id}>
          <Note {note} />
        </label>
      {:else if note.type === "array"}
        <label for={note.id}>
          <List {note} />
        </label>
      {:else if note.type === "todo"}
        <label for={note.id}>
          <Todo {note} />
        </label>
      {/if}
    </li>

    <Readnote {note}>
      <svelte:fragment slot="note" />
      <svelte:fragment slot="array" />
      <svelte:fragment slot="todo" />
    </Readnote>
  {/each}
</ul>
