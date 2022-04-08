<script lang="ts">
    export let todo: Record<string, string | string[]>[];
</script>

<ul class="grid md:grid-cols-2 lg:grid-cols-4">
    {#each todo as note (todo.indexOf(note))}
        {#if note.type == "note"}
            <li
                class="border-l-4 m-2 p-3 border-secondary bg-base-100 shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:bg-base-200"
                id={todo.indexOf(note)}
            >
                <span class="text-lg">{note.name}</span>
                <p class="text-2xs">{note.date}</p>
                <p class="text-sm">{note.content.slice(0, 25) + "..."}</p>
            </li>
        {:else if note.type == "array"}
            <li
                class="border-l-4 m-2 p-3 border-secondary bg-base-100 max-h-34 shadow-md hover:bg-base-200 transition-all duration-200 cursor-pointer hover:-translate-y-1"
                id={todo.indexOf(note)}
            >
                <span class="text-lg">{note.name}</span>
                <p class="text-2xs">{note.date}</p>
                <ol class="ml-3 text-primary" style="list-style-type: disc;">
                    {#each note.content.slice(0, 2) as item}
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
        {/if}
    {/each}
</ul>

<style>
    p {
        padding: 0;
        margin: 0;
    }
</style>
