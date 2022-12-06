<script lang="ts">
    import Input from '$/components/TextField.svelte';
    import Button from '$/components/Button.svelte';

    import config from '$/config';
    import { onMount } from 'svelte';
    import type { ActionData } from './$types';

    let meno: string = '';
    let email: string = '';
    let heslo: string = '';
    let hesloConfirm: string = '';
    let captcha: string = '';

    export let form: ActionData;

    onMount(() => {
        (window as any).captchaCallback = (clientCode: string) => {
            captcha = clientCode;
        };
    });
    
    let canSubmit = false;
    $: canSubmit = meno !== '' && email !== '' && heslo !== '' && hesloConfirm !== '' && captcha !== '';
</script>

<svelte:head>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

<Input name="email" placeholder="Email" type="email" bind:value={email} />
<Input name="meno" placeholder="Meno" type="text" bind:value={meno} />
<Input name="heslo" placeholder="Heslo" type="password" bind:value={heslo} />
<Input
    name="hesloConfirm"
    placeholder="Potvrdiť heslo"
    type="password"
    bind:value={hesloConfirm}
/>

<div
    class="g-recaptcha"
    data-sitekey={config.captchaSiteKey}
    data-theme="light"
    data-callback="captchaCallback"
/>

<Button disabled={!canSubmit}>
    Registrovať
</Button>

{#if form?.error}
    <p class="error-message">{form?.message}</p>
{/if}

<style lang="scss">
    @import '../../../Settings.scss';

    .error-message {
        color: $clr-error;
    }
</style>

