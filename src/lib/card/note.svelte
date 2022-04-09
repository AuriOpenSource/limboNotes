<script lang="ts">
    export let name: string;
    export let date: string;
    export let content: string;
    export let id: string;
</script>

<li
    class="border-l-4 m-2 p-3 border-secondary bg-base-100 shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:bg-base-200"
    {id}
>
    <span class="text-lg">{name}</span>
    <p class="text-2xs">Generated in {date}</p>
    <p class="text-sm">{content.slice(0, 25) + "..."}</p>
</li>
