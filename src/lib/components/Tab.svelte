
<script>
    export let href;
    export let active = false;
</script>
  
<a href={href} class="tab {active ? 'active' : ''}">
  <slot></slot>
</a>

<style>

  .tab {
    @apply py-2 px-3 no-underline text-white bg-[#1e90ff] font-bold
  }

  .tab.active {
    @apply text-black bg-white 
  }

</style> 
