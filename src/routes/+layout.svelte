<script lang="ts">
    import type { LayoutServerData } from './$types';

    import NavLink from '$/components/NavLink.svelte';
    import Header from '$/components/Header.svelte';

    export const prerender = true;
    export let data: LayoutServerData;

    let links: { name: string; href: string }[] = [];

    if (data.user) {
        links = [
            { name: 'Domov', href: '/' },
            { name: 'Logout', href: '/form/logout' },
        ];
    } else {
        links = [
            { name: 'Domov', href: '/' },
            { name: 'Login', href: '/form/login' },
            { name: 'Register', href: '/form/registracia' },
        ];
    }
</script>

<div id="app">
    <Header {links} />

    <main>
        <div class="page-container">
            <slot />
        </div>
    </main>

    <footer>
        <p>Túto súťaž pre vás pripravili:</p>
        <p><a href="https://pavolkomlos.xyz">Pavol Alexander Komloš</a></p>
        <p><a href="https://www.harmansky.xyz">Adam Harmanský</a></p>
        <br />
        <p>Neváhajte nás kontaktovať v prípade potreby pomoci</p>
    </footer>
</div>

<style type="scss">
    @import '../Settings.scss';

    :global {
        a {
            color: $clr-accent1;
            display: inline-block;
            transition: 0.1s;
            text-decoration: none;

            &:visited,
            &:hover,
            &:active {
                color: $clr-accent1;
            }

            &:hover {
                opacity: 0.9;
                scale: 1.02;
                transform: translateY(-5%);
            }
        }

        h1 {
            font-family: $ff-pixel;
            font-size-adjust: 0.7;
        }
    }

    :root {
        background-color: $clr-dark;
        color: $clr-light;

        font-family: $ff-primary;
        font-size: 1.4rem;
    }

    #app {
        display: flex;
        flex-direction: column;

        width: 100%;
        min-height: 100vh;
        font-size: max(min(2.8vw, 1.1em), 0.9em);
    }

    main {
        flex-grow: 1;

        display: flex;
        justify-content: center;

        .page-container {
            max-width: 1300px;
            width: 90%;
            margin: 3vh 0;
        }
    }

    footer {
        background-color: $clr-dark-darker;
        text-align: center;
        padding: 2em 5vw;
    }
</style>
