<script lang="ts">
    export let name: string;
    export let date: string;
    export let content: any[];
    export let id: string;
</script>

<li
    class="border-l-4 m-2 p-3 border-secondary bg-base-100 max-h-34 shadow-md hover:bg-base-200 transition-all duration-200 cursor-pointer hover:-translate-y-1"
    {id}
>
    <span class="text-lg">{name}</span>
    <p class="text-2xs">Generated in {date}</p>
    <ul class="ml-3 text-primary">
        {#each content.slice(0, 2) as todo, idx}
            <li class:done={todo.done} class="text-sm flex place-items-center my-2">
                <input 
                    type="checkbox"
                    class="checkbox checkbox-xs checkbox-primary"
                    bind:checked="{todo.done}"
                    
                />
                <input 
                    type="text"
                    class:risk={todo.done}
                    class="input input-ghost input-xs mx-2 text-base-content" 
                    bind:value={todo.text} 
                    
                />
            </li>
        {/each}
        <li class="text-sm">
            <span class="text-base-content">...</span>
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
