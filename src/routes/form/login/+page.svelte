<script lang="ts">
    import TextField from '@smui/textfield';
    import Button from '@smui/button';
    
    let email: string | null = null;
    let heslo: string | null = null;
</script>

<TextField variant="filled" bind:value={email} label="Email" />
<TextField variant="filled" bind:value={heslo} label="Heslo" />
<Button variant="raised">Login</Button>

<style lang="scss">
</style>
