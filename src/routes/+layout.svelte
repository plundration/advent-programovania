<script>
    import Header from '$/components/Header.svelte';
    // export const ssr = false;
    export const prerender = true;
</script>

<div id="app" data-sveltekit-prefetch>
    <Header />

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
            transition: 0.3s ease;
            text-decoration: none;
        }

        a:visited,
        a:hover,
        a:active {
            color: $clr-accent1;
        }

        a:hover {
            transform: translateY(-0.1em);
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
        margin: 3vh 0;
    }
</style>
