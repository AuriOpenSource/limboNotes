<script lang="ts">
    import { onMount } from "svelte";
    import {animate, stagger} from 'motion'
    import List from "./layout/list.svelte";
    import Note from "./layout/note.svelte";
    import Todo from "./layout/todo.svelte";

    export let todo: any;

    onMount(() => {
        animate(
            'li',
            {
                opacity: [0,1],
                x: [-20, 0]
            },
            {
                duration: .5,
                delay: stagger(.1)
            }
        )
    })
</script>

<ul class="grid p-2 md:grid-cols-2 lg:grid-cols-4">
    {#each todo as note, id (note)}
        {#if note.type == "note"}
            <Note {id} {...note} on:myevent/>
        {:else if note.type == "array"}
            <List {id} {...note} on:myevent/>
        {:else if note.type == "todo"}
            <Todo {id} {...note} on:myevent/>
        {/if}
    {/each}
</ul>

<style>
    p {
        padding: 0;
        margin: 0;
    }
</style>
