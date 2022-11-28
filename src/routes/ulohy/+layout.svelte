<script lang="ts">
    import TextField from '@smui/textfield';
    import Button from '@smui/button';

    let files: FileList | null = null;
</script>

<div>
    <input accept="text/*" bind:files id="file" name="avatar" type="file" />
    <Button variant="raised">Odovzdať</Button>
</div>

<article>
    <slot />
</article>
