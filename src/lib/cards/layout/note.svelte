<script lang="ts">
    import { createEventDispatcher } from "svelte";
    let name: string;
    let date: string;
    let content: string;
    let id: string;

    export {name, date, content, id}

    const dispatch = createEventDispatcher();
</script>

<li
    id="card"
    class="border-l-4 m-2 p-3 border-secondary bg-base-100 shadow-md transition-all duration-200 cursor-pointer z-10 hover:-translate-y-1 hover:bg-base-200"
    on:click={() => dispatch('myevent', {id})}
>
    <span class="text-lg">{name}</span>
    <p class="text-2xs">Generated in {date}</p>
    <p class="text-sm">{content.slice(0, 25) + "..."}</p>
</li>
