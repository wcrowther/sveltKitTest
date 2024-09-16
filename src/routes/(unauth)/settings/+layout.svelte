<script>

    import { page } from '$app/stores';
    import Tab      from "$lib/components/Tab.svelte";

    $: currentPath = $page.url.pathname;

    $: displayActive    = currentPath.startsWith('/settings/display');
    $: functionalActive = currentPath.startsWith('/settings/functional');
    $: animationActive  = currentPath.startsWith('/settings/animation');

</script>

<div class="mt-5 px-3 flex justify-end gap-2">
    <Tab href="/settings/display"    active={displayActive}>Display</Tab>
    <Tab href="/settings/functional" active={functionalActive}>Functional</Tab>
    <Tab href="/settings/animation"  active={animationActive}>Animation</Tab>
</div>

<div class="p-5 min-h-[300px]">
    <slot>Settings Optional Content</slot>
</div>
