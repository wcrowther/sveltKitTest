
<script>
    export let href;
    export let active = false;
</script>
  
<a href={href} class="tab {active ? 'active' : ''}">
  <slot></slot>
</a>
  
<style>
  .tab {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: white;
    background-color: dodgerblue;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
  }

  .tab.active {
    color: dodgerblue;
    background-color: white;
  }
</style>
  