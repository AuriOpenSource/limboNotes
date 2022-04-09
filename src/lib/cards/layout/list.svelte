<script lang="ts">
    import { createEventDispatcher } from "svelte";
    let name: string;
    let date: string;
    let content: string[];
    let id: string;

    export {name, date, content, id}

    const dispatch = createEventDispatcher();
</script>

<li 
    {id}
    class="border-l-4 m-2 p-3 border-secondary bg-base-100 max-h-34 shadow-md z-10 hover:bg-base-200 transition-all duration-200 cursor-pointer"
    on:click={() => dispatch('myevent', {id})}
>
    <span class="text-lg">{name}</span>
    <p class="text-2xs">Generated in {date}</p>
    <ol class="ml-3 text-primary" style="list-style-type: disc;">
        {#each content.slice(0, 2) as item}
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
</li>
