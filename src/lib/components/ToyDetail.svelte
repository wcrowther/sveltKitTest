
<script>
    export let toy;
</script>
  
{#if toy}
<div class="block bg-slate-200 p-3 grow w-1/2">
    <div class="">Toy Id:       {toy.id}</div>
    <div class="">Name:         {toy.name}</div>
    <div class="">Description:  {toy.description}</div>
</div>
{/if}

<!-- TO USE: <ToyDetail {toy}></ToyDetail> -->