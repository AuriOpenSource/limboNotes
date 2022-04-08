<script lang="ts">
    export let todo: Record<string, string | string[]>[];
</script>

<ul class="grid md:grid-cols-2 lg:grid-cols-4">
    {#each todo as note (todo.indexOf(note))}
        {#if note.type == 'note'}
        <li
            class="border-l-4 m-2 p-3 border-secondary bg-base-100 shadow-md hover:bg-base-200 transition-all duration-200 hover:-translate-y-1"
            id="{todo.indexOf(note)}"
        >
            <span class="text-lg">{note.name}</span>
            <p class="text-sm">{note.content.slice(0, 25) + '...'}</p>
        </li>
        {:else if note.type == 'array'}
        <li
            class="border-l-4 m-2 p-3 border-secondary bg-base-100 shadow-md hover:bg-base-200 transition-all duration-200 hover:-translate-y-1"
            id="{todo.indexOf(note)}"
        >
            <span class="text-lg">{note.name}</span>
            <ol>
                {#each note.content as item}
                <li class="text-sm">{item.slice(0, 25)}</li>
                {/each}
            </ol>
        </li>
        {/if}
    {/each}
</ul>
