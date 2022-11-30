<script lang="ts">
    import { onMount } from 'svelte';

    let menuIsOpen = false;
    
    export const toggleMenu = () => {
        menuIsOpen = !menuIsOpen;
    };
    
    onMount(() => {
        window.addEventListener('keydown', () => {
            menuIsOpen = false;
        });
    });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="burger-button" on:click={toggleMenu}>
    <span />
    <span />
    <span />
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="burger-overlay" class:active={menuIsOpen} on:click={toggleMenu} />

<div class="burger-menu" class:open={menuIsOpen}>
    <slot />
</div>

<style lang="scss">
    @import '../Settings.scss';

    .burger-button {
        position: absolute;

        top: 0;
        left: 0;
        z-index: 10000;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 50px;
        height: 50px;

        transition: 0.1s;

        @media (min-width: $mobile-width) {
            display: none;
        }

        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }

        span {
            width: 100%;
            height: 20%;
            background-color: $clr-light;
            border-radius: 9%;
        }
    }

    .burger-overlay {
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: 11000;

        opacity: 0;
        background-color: #00000050;
        transition: opacity 0.3s;

        transform: translateX(100%);

        &.active {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .burger-menu {
        $width: Min(65vw, 400px);
        width: $width;
        height: 100vh;
        position: absolute;
        left: calc(-1 * $width);
        z-index: 12000;
        background-color: $clr-dark-darker;

        transition: 0.3s ease;

        &.open {
            transform: translateX($width);
        }
    }

    :global {
        .burger-menu {
        }
    }
</style>
