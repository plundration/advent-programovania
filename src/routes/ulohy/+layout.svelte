<script lang="ts">
    import TextField from '$/components/TextField.svelte';
    import Button from '$/components/Button.svelte';

    let files: FileList | null = null;
</script>

<div class="file-form">
    <div>
        <label>
            Vyberte súbor
            <input accept="text/*" bind:files id="file" name="file" type="file" />
        </label>
        {#if files}
            <span>{files[0].name}</span>
        {/if}
    </div>
    <Button>Odovzdať</Button>
</div>

<article>
    <slot />
</article>

<style lang="scss">
    @import '../../Settings.scss';

    .file-form {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }

    input {
        display: none;
    }

    label {
        cursor: pointer;
        background-color: $clr-sec;
        border-radius: 0.2em;
        padding: 0.3em 0.4em;
    }
</style>
