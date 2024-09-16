<script>

    import "@src/tailwind.css";
    import { page } from '$app/stores';

    $: currentPath = $page.url.pathname;

    $: homeActive       = currentPath === '/';
    $: aboutActive      = currentPath.startsWith('/about');
    $: settingsActive   = currentPath.startsWith('/settings');

</script>

<div class="flex mt-5 p-3 gap-2 bg-[#1e90ff]">
    <a href="/"         class="nav" class:active={homeActive}>Home</a>
    <a href="/about"    class="nav" class:active={aboutActive}>About</a>
    <a href="/settings" class="nav" class:active={settingsActive}>Settings</a>
</div>

<slot>Fallback content</slot>

<div class="p-2 bg-[#1e90ff] text-white font-bold text-center">
    Footer
</div>

<style>

    .nav.active{
        @apply text-[#1e90ff] bg-white 
    }
    .nav{
        @apply px-3 py-2 bg-[#acc2ec] no-underline text-black font-bold
    }

</style>

