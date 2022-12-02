<script lang="ts">
    import NavLink from './NavLink.svelte';
    export let links: { name: string; href: string }[];
</script>

<header>
    <div class="header-title">&lt;ADVENT/&gt;</div>
    <div class="header-links">
        {#each links as link}
            <NavLink href={link.href}>{link.name}</NavLink>
        {/each}
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

    @media (max-width: $mobile-width) {
        .header-links {
            display: none;
        }
    }

    :global {
        .header-links a {
            padding: 0.03em 0.25em;
            border-radius: 2px;
            margin: 0.2em;

            &.active {
                color: $clr-light;
                background-color: $clr-accent1;
            }
        }
    }
</style>
