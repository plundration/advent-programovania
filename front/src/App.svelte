<script lang="ts">
    export let name: string;
</script>

<main>
	<h1>Advent lol</h1>
	<p>stuff</p>
</main>

<style lang="scss">
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
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }
</style>
