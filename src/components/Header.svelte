<script lang="ts">
    import Burger from './Burger.svelte';
    import NavLink from './NavLink.svelte';

    export let links: { name: string; href: string }[];
</script>

<header>
    <div class="header-container">
        <div class="burger-container">
            <Burger {links} />
        </div>
        <img src="/logo.svg" alt="logo" class="logo" />
        <div class="header-links">
            {#each links as link}
                <NavLink href={link.href}>{link.name}</NavLink>
            {/each}
        </div>
    </div>
</header>

<style lang="scss">
    @import '../Settings.scss';

    header {
        background-color: $clr-dark-darker;
        color: $clr-accent1;
        height: $header-height;
        padding: min(1vh, 10px);

        display: flex;
        justify-content: center;
        z-index: 20000;

        box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.15);
    }

    .header-container {
        display: flex;
        justify-content: space-between;

        @media (min-width: $mobile-width) {
            justify-content: center;
        }

        align-items: center;
        gap: 1em;

        height: 100%;
        width: 100%;
        padding: 0 .3em;

        .logo {
            border-radius: 3px;
            background-color: white;
            padding: 3px 6px;
            height: calc($header-height * 0.7);
        }
    }

    .burger-container {
        display: none;
    }

    @media (max-width: $mobile-width) {
        .header-links {
            display: none;
        }

        .burger-container {
            display: block;
        }
    }

    :global {
        .header-links a {
            padding: 0.03em 0.25em;
            border-radius: 2px;
            margin: 0.2em;

            &.active {
                background-color: $clr-accent1;
                color: $clr-dark-darker;
            }
        }
    }
</style>
