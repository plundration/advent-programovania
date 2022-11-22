<script>
    export const ssr = false;
</script>

<h1 id="h">App</h1>

<slot />

<style type="scss">
    @import "../Settings.scss";

    #h {
        color: $clr-accent2;
    }
</style>
