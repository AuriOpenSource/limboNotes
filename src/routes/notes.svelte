<script lang="ts">
    import Button from "$lib/button/button.svelte";
    import Cards from "$lib/cards/cards.svelte";

    // let user: Record<string, string | boolean> = {login: false}
    let todo: Record<string, string | string[] | Record<string, any>>[] = [
        {
            name: "Lembrete",
            content: "Encerra o período de insenção do enem",
            date: "15/04",
            type: "note",
        },
        {
            name: "Filmes Star Wars",
            content: ["Rogue One", "Star Wars: The last Jedis", "Han Solo"],
            date: "15/04",
            type: "array",
        },
        {
            name: "Deveres",
            content: [
                { done: true, text: "finish Svelte tutorial" },
                { done: false, text: "build an app" },
                { done: false, text: "world domination" },
            ],
            date: "15/04",
            type: "todo",
        },
    ];

    function log(v) {
        console.log(typeof v == 'object' ? todo[v.detail.id].type : v);
    }
</script>

<svelte:head>
    <title>notes</title>
</svelte:head>

<section>
    <Cards {todo} on:myevent={log} />
    <Button on:click={log} />
</section>
