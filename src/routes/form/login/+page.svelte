<script lang="ts">
    import Input from '$/components/TextField.svelte';
    import Button from '$/components/Button.svelte';
    
    let email: string = '';
    let heslo: string = '';
    
    function canSubmit(vars: string[]): boolean {
        return vars.every(value => value !== '');
    }
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<Input name="email" placeholder="Email" type="email" bind:value={email} />
<Input name="heslo" placeholder="Heslo" type="password" bind:value={heslo} />

<Button disabled={!canSubmit([email, heslo])}>Login</Button>

<style lang="scss">
</style>
