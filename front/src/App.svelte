<script lang="ts">
    export let name: string;
</script>

<main>
	<h1>Advent lol</h1>
	<p>stuff</p>
</main>

<style lang='scss' type='text/scss'>
    @import 'Settings.scss';

    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;

        @media (min-width: 640px) {
            max-width: none;
        }
    }

    h1 {
        color: $clr-accent1;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }
</style>
