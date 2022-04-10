<script lang="ts">
    import { onMount } from "svelte";

    
    const links = [
        ['/', 'home', false],
        ['/notes', 'notes', false]
    ]
    
    onMount(() => {
        links
        .forEach((e, i) => {
            if (links[i][0] == self.location.pathname) links[i][2] = true
        })
    })

    function underline() {
        console.log(this.textContent);

        const {index} = this.dataset

        links
        .forEach((e , i) => {
            links[i][2] = false
        });
        links[index][2] = true
    }
</script>

<div class="grid grid-cols-2">
    {#each links as [path, name, activate], id}
    <a 
        href={path}
        data-index={id}
        on:click={underline} 
        class:border-b-2={activate} 
        class="flex place-items-center px-2 border-secondary transition-all"
    >
        {name}
    </a>
    {/each}
</div>