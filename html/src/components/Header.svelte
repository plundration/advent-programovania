<script lang="ts">
    import NavLink from './NavLink.svelte';
</script>

<header>
    <div class="header-title">&lt;ADVENT/&gt;</div>
    <div class="header-links">
        <NavLink href="/">domov</NavLink>
        <NavLink href="/form/login">login</NavLink>
        <NavLink href="/form/registracia">registracia</NavLink>
    </div>
</header>

<style lang="scss">
    @import '../Settings.scss';

    header {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $clr-dark-darker;
        gap: 1em;
        height: min(6vh, 60px);
    }

    :global {
        .header-links a {
            padding: 0.1em 0.3em;
            font-size: 1em;
            border-radius: 2px;
            margin: 0.2em;

            &.active {
                color: $clr-light;
                background-color: $clr-accent1;
            }
        }
    }
</style>
