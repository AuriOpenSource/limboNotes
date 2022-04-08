<script lang="ts">
    import Card from '../lib/card/card.svelte'

    let todo: Record<string, string | string[]>[] = [
        { name: "Lembrete", content: "Encerra o período de insenção do enem", date: '15/04', type:'note' },
        { name: "Filmes", content: ['Rogue One', 'Star Wars', 'Han Solo'], date: '15/04', type: 'array' },
    ];
</script>

<svelte:head>
    <title>notes</title>
</svelte:head>

<section id="section" class="overflow-auto">
    <Card {todo}/>
</section>