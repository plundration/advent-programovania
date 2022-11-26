<script>
    import Header from '$/components/header.svelte';
    export const ssr = false;
</script>

<svelte:head>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css' crossorigin='anonymous' />
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Questrial:400,700,900|Chakra+Petch:400,700,900|IBM+Plex+Mono:400,900&display=swap' />
    <link href='https://fonts.cdnfonts.com/css/thegoodmonolith' rel='stylesheet' />
</svelte:head>

<div id='app' data-sveltekit-prefetch>
    <Header />

    <main>
        <div class='page-container'>
            <slot />
        </div>
    </main>

    <!-- <footer /> -->
</div>

<style type='scss'>
    @import '../Settings.scss';

    :global {
        a {
            color: $clr-accent1;
            display: inline-block;
            transition: 0.2s ease;
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
    }
</style>
