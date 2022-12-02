<script lang="ts">
    import type { LayoutData, PageData } from './$types';

    import NavLink from '$/components/NavLink.svelte';
    import Header from '$/components/Header.svelte';
    import Burger from '$/components/Burger.svelte';

    export const prerender = true;
	export let data: LayoutData;
    
    let links = [
        { name: 'domov', href: '/' },
        { name: 'login', href: '/form/login' },
        { name: 'registracia', href: '/form/registracia' },
    ]
</script>

<div id="app">
    <Header {links} />
    <Burger {links} />

    <main>
        <div class="page-container">
            <slot />
        </div>
    </main>
</div>

<style type="scss">
    @import '../Settings.scss';

    :global {
        a {
            color: $clr-accent1;
            display: inline-block;
            transition: 0.2s ease;
            text-decoration: none;

            &:visited,
            &:hover,
            &:active {
                color: $clr-accent1;
            }

            &:hover {
                opacity: 0.9;
                scale: 1.07;
            }
        }
    }

    :root {
        background-color: $clr-dark;
        color: $clr-light;
        font-family: $ff-primary;
    }

    #app {
        width: 100%;
        min-height: 100vh;

        display: flex;
        flex-direction: column;
        font-size: 1.3rem;
    }

    main {
        flex-grow: 1;

        display: flex;
        justify-content: center;
    }

    .page-container {
        max-width: 800px;
        width: 100%;
        margin: 3vh min(4vw, 1em);
    }
</style>
