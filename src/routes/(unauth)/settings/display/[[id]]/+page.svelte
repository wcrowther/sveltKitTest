
<script>

    import ToyDetail from "@components/ToyDetail.svelte";
    export let data; // Access the data from +page.js

    $: toy = data.selectedToy; 

    // @ts-ignore
    function selected(item, id) {
		return item ? (item.id === id) : false;
	}

</script>

<h2 class="mb-3">Toys</h2>

<div class="flex flex-wrap justify-between items-start gap-4 border border-blue whit">

    <div class="flex p-3 grow box-content" >
        <ul class="mt-0 ml-5"> 
            {#each data.toysList as { id, name }}
                <li class="{selected(toy, id) ? 'list-disc' : 'list-none'}"><a href="/settings/display/{id}">{name}</a></li>
            {/each}
        </ul>
    </div>
    <div class=""></div>
    <ToyDetail {toy} />

</div>
