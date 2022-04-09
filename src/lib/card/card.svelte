<script lang="ts">
    import List from "./list.svelte";
    import Note from "./note.svelte";
    import Todo from "./todo.svelte";

    export let todo: Record<string, string | string[]>[];
</script>

<ul class="grid p-2 md:grid-cols-2 lg:grid-cols-4">
    {#each todo as note, id (note)}
        {#if note.type == "note"}
            <Note {id} {...note} />
        {:else if note.type == "array"}
            <List {id} {...note} />
        {:else if note.type == "todo"}
            <Todo {id} {...note} />
        {/if}
    {/each}
</ul>

<style>
    p {
        padding: 0;
        margin: 0;
    }
</style>
