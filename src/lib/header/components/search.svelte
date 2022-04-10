<script lang="ts">
    export let input: string = "";
</script>

<input
    type="text"
    placeholder="search"
    class="input input-ghost input-sm my-1 mr-2 placeholder h-10 w-28"
    value={input}
/>

<style>
    input {
        border-color: transparent;
        outline-offset: 0;
        outline-color: transparent;
    }
</style>
