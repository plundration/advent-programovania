<script>
    import NavLink from '$/components/NavLink.svelte';
    import Header from '$/components/Header.svelte';
    import Burger from '$/components/Burger.svelte';
    // export const ssr = false;
    export const prerender = true;
</script>

<div id="app" data-sveltekit-preload>
    <Header>
        <NavLink href="/">domov</NavLink>
        <NavLink href="/form/login">login</NavLink>
        <NavLink href="/form/registracia">registracia</NavLink>
    </Header>
    <Burger>
        <div class="burger-container">
            <div class="burger-links">
                <!-- Close on click: todo -->
                <NavLink className="burger-link" href="/">domov</NavLink>
                <NavLink className="burger-link" href="/form/login">login</NavLink>
                <NavLink className="burger-link" href="/form/registracia">registracia</NavLink>
            </div>
        </div>
    </Burger>

    <main>
        <div class="page-container">
            <slot />
        </div>
    </main>

    <!-- <footer /> -->
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

        .burger-container {
            padding: 3vh 5vw;

            .burger-links {
                display: flex;
                flex-direction: column;

                .burger-link {
                    font-size: 2em;
                    width: fit-content;

                    &.active {
                        padding: 0.02em 0.3em;
                        border-radius: 0.1em;
                        color: $clr-light;
                        background-color: $clr-accent1;
                    }
                }
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
