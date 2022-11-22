<script>
    export const ssr = false;
    
    let name = "jfsda";
</script>

<style type="scss">
    @import "../Settings.scss";

    #h {
        color: $clr-accent2;
    }
</style>

<h1 id="h">App</h1>

<slot />
