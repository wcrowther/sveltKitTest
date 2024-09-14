<script>

    import { page } from '$app/stores';
    import Tab      from "$lib/components/Tab.svelte";

    $: currentPath = $page.url.pathname;

    $: displayActive    = currentPath.startsWith('/settings/display');
    $: functionalActive = currentPath.startsWith('/settings/functional');
    $: animationActive  = currentPath.startsWith('/settings/animation');


</script>

<div class="settings">
    <Tab href="/settings/display"    active={displayActive}>Display</Tab>
    <Tab href="/settings/functional" active={functionalActive}>Functional</Tab>
    <Tab href="/settings/animation"  active={animationActive}>Animation</Tab>
</div>

<div class="main">
    <slot>Settings Optional Content</slot>
</div>

<style>
    .main{
        height: 300px;
        padding: 10px;
    }
    .settings{
        padding-top: 10px;
        display:flex;
        justify-content: end;
        gap: 5px;
    }

</style>