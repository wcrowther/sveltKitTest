<script>
    import ToyDetail from "$lib/components/ToyDetail.svelte";
    export let data; // Access the data from +page.js

    $: toy = data.selectedToy; 
</script>

<h2>Toys</h2>

<div class="flexbox">

    <div class="box" >
        <ul style="margin-top: 0;"> 
            {#each data.toysList as { id, name }}
                <li><a href="/settings/display/{id}">{name}</a></li>
            {/each}
        </ul>
    </div>
    
    {#if toy}
    <div class="box">
        <div class="">Toy Id: {toy.id}</div>
        <div class="">Name: {toy.name}</div>
        <div class="">Description: {toy.description}</div>
    </div>
    {/if}

</div>

<style>
    .box {
        display: block;
        /* border: solid 1px red; */
        padding: 10px;
        flex-grow: 1; 
    }
    ul {
        margin-left: 20px;

    }
    .flexbox {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start; /* Align items at the top */
        gap: 1rem;
        border: solid blue 1px;
        min-height: 100px; /* Set minimum height to help with alignment */
    }
</style>
