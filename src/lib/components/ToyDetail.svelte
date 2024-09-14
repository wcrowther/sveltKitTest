
<script>
    export let toy;
</script>
  
{#if toy}
  <div class="box">
      <div class="">Toy Id:       {toy.id}</div>
      <div class="">Name:         {toy.name}</div>
      <div class="">Description:  {toy.description}</div>
  </div>
{/if}

  
<style>
  .box{
      display: block;
      border: solid 1px red;
      padding: 10px;
      flex-grow: 1;
  }
</style>

<!-- <ToyDetail {toy}></ToyDetail> -->