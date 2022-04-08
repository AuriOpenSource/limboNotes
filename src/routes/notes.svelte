<script lang="ts">
    import Button from "$lib/button/button.svelte";
    import Card from "../lib/card/card.svelte";

	// let user: Record<string, string | boolean> = {login: false}
    let todo: Record<string, string | string[]>[] = [
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
            name: "Lembrete",
            content: "Encerra o período de insenção do enem",
            date: "15/04",
            type: "note",
        },
        {
            name: "Deveres",
            content: ["Arrumar a casa", "Cuidar dos animais", "Fazer o Almoço"],
            date: "15/04",
            type: "array",
        },
        {
            name: "Deveres",
            content: ["Arrumar a casa", "Cuidar dos animais", "Fazer o Almoço"],
            date: "15/04",
            type: "array",
        },
        {
            name: "Deveres",
            content: ["Arrumar a casa", "Cuidar dos animais", "Fazer o Almoço"],
            date: "15/04",
            type: "array",
        },
        {
            name: "Deveres",
            content: ["Arrumar a casa", "Cuidar dos animais", "Fazer o Almoço"],
            date: "15/04",
            type: "array",
        },
        {
            name: "Deveres",
            content: ["Arrumar a casa", "Cuidar dos animais", "Fazer o Almoço"],
            date: "15/04",
            type: "array",
        },
        {
            name: "Deveres",
            content: ["Arrumar a casa", "Cuidar dos animais", "Fazer o Almoço"],
            date: "15/04",
            type: "array",
        },
        {
            name: "Deveres",
            content: ["Arrumar a casa", "Cuidar dos animais", "Fazer o Almoço"],
            date: "15/04",
            type: "array",
        },
        {
            name: "Deveres",
            content: ["Arrumar a casa", "Cuidar dos animais", "Fazer o Almoço"],
            date: "15/04",
            type: "array",
        },
        {
            name: "Deveres",
            content: ["Arrumar a casa", "Cuidar dos animais", "Fazer o Almoço"],
            date: "15/04",
            type: "array",
        },
        {
            name: "Deveres",
            content: ["Arrumar a casa", "Cuidar dos animais", "Fazer o Almoço"],
            date: "15/04",
            type: "array",
        },
        {
            name: "Deveres",
            content: ["Arrumar a casa", "Cuidar dos animais", "Fazer o Almoço"],
            date: "15/04",
            type: "array",
        },
        {
            name: "Deveres",
            content: ["Arrumar a casa", "Cuidar dos animais", "Fazer o Almoço"],
            date: "15/04",
            type: "array",
        },
        {
            name: "Deveres",
            content: ["Arrumar a casa", "Cuidar dos animais", "Fazer o Almoço"],
            date: "15/04",
            type: "array",
        },
        {
            name: "Deveres",
            content: ["Arrumar a casa", "Cuidar dos animais", "Fazer o Almoço"],
            date: "15/04",
            type: "array",
        },
        {
            name: "Deveres",
            content: ["Arrumar a casa", "Cuidar dos animais", "Fazer o Almoço"],
            date: "15/04",
            type: "array",
        },
    ];

    console.table(todo);
</script>

<svelte:head>
    <title>notes</title>
</svelte:head>

<section id="section" class="overflow-auto">
    <Card {todo} />
    <Button />
</section>
