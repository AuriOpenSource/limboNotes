<script lang="ts">
    import { createEventDispatcher } from "svelte";
    let name: string;
    let date: string;
    let content: any[];
    let id: string;

    export {name, date, content, id}

    const dispatch = createEventDispatcher();
</script>

<li
    id="li"
    class="border-l-4 m-2 p-3 border-secondary bg-base-100 max-h-34 shadow-md z-10 hover:bg-base-200 transition-all duration-200 cursor-pointer"
    on:click|self={() => dispatch('myevent', {id})}
>
    <span class="text-lg">{name}</span>
    <p class="text-2xs">Generated in {date}</p>
    <ul class="ml-3 text-primary">
        {#each content.slice(0, 2) as todo, idx}
            <li id="li" class:done={todo.done} class="text-sm flex place-items-center my-2">
                <input 
                    type="checkbox"
                    class="checkbox checkbox-xs checkbox-primary"
                    bind:checked="{todo.done}"
                    disabled
                />
                <span class="text-secondary mx-2" class:risk={todo.done}>{todo.text}</span>
            </li>
        {/each}
        <li id="li" class="text-sm flex place-items-center">
            <input type="checkbox" class="checkbox checkbox-xs checkbox-primary" disabled/>
            <span class="text-base-content mx-2">...</span>
        </li>
    </ul>
</li>

<style>
	.done {
		opacity: 0.8;
	}
    .risk {
        text-decoration: line-through;
    }
</style>
