<script lang="ts">
  import { goto } from "$app/navigation";
  import { todos, type BaseDef } from "$lib/stores/notesStore";
  import { v4 as uuid } from "@lukeed/uuid";
  let title = "";
  let content = "";

  function newNote() {
    todos.update((n) => {
      const newNote: BaseDef = {
        type: "note",
        name: title,
        content: content,
        id: uuid(),
        date: "23/12",
      };
      localStorage.setItem("notes", JSON.stringify([newNote, ...n]));
      return [newNote, ...n];
    });
    goto("/");
  }
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="w-1/2 text-center lg:text-left">
      <h1 class="text-5xl font-bold">{title}</h1>
      <p class="py-6">{content}</p>
    </div>
    <div class="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
      <div class="card-body">
        <div class="form-control">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label">
            <span class="label-text">Note Name</span>
          </label>
          <input
            type="text"
            placeholder="ex: learn cooking"
            bind:value={title}
            class="input input-bordered"
          />
        </div>
        <div class="form-control">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label">
            <span class="label-text">Note Content</span>
          </label>
          <textarea
            bind:value={content}
            class="textarea textarea-bordered"
            placeholder="here goes the content..."
          />
        </div>
        <div class="form-control mt-6">
          <button on:click={newNote} class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
