<script>

    import { page } from '$app/stores';

    $: currentPath = $page.url.pathname;

    $: homeActive       = currentPath === '/';
    $: aboutActive      = currentPath.startsWith('/about');
    $: settingsActive   = currentPath.startsWith('/settings');

</script>

<div class="nav">
    <a href="/"         class:active={homeActive}>Home</a>
    <a href="/about"    class:active={aboutActive}>About</a>
    <a href="/settings" class:active={settingsActive}>Settings</a>
</div>

    <slot>Fallback content</slot>

    <div class="footer">
        Footer
    </div>

<style>
    .nav{
        margin-top: 20px;
        padding: 10px;
        display: flex;
        gap: 5px;
        background-color: dodgerblue;
    }
    .footer{
        padding: 10px;
        background-color: dodgerblue;
        color: white;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
    }
    a {
        padding: 6px 10px; 
        background-color: hsl(219, 63%, 80%);
        text-decoration: none;
        color: black;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
    }
    a.active {
        color: dodgerblue;
        background-color: white;
    }

</style>

