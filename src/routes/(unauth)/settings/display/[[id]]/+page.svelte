
<script>

    export let data; // Access the data from +page.js

    $: toy = data.selectedToy; 

</script>

<h2>Toys</h2>

<div class="flexbox">
    <ul>
        {#each data.toysList as { id, name }}
            <li><a href="/settings/display/{id}">{name}</a></li>
        {/each}
    </ul>

    {#if toy}
        <div class="box">
            <div class="box">Toy Id:       {toy.id}</div>
            <div class="">Name:         {toy.name}</div>
            <div class="">Description:  {toy.description}</div>
        </div>
    {/if}
</div>

<style>
    ul{
        margin-left: 20px;
        border: solid red 1px;
    }
    .flexbox {
        display: flex;
        justify-content:space-between;
        align-items: flex-start;
        gap: 1rem;
        border: solid blue 1px;
    }
    .box{
        display: block;
        border: solid 1px red;
        padding: 10px;
        flex-grow: 1;
    }
</style>

