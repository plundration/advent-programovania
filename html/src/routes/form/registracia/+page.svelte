<script lang="ts">
    import TextField from '@smui/textfield';
    import Button from '@smui/button';

    import { Recaptcha, recaptcha, observer } from 'svelte-recaptcha-v2';
    import config from '$/config';
    import { onMount } from 'svelte';

    let meno: string | null = null;
    let email: string | null = null;
    let heslo: string | null = null;
    let hesloConfirm: string | null = null;
    let captcha: string | null = null;

    onMount(async () => {
        (window as any).captchaCallback = (clientCode: string) => {
            captcha = clientCode;
        };
    });
    
    function canSubmit(): boolean {
        return meno !== null && email !== null && heslo !== null && hesloConfirm !== null && captcha !== null;
    }
</script>

<svelte:head>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

<TextField variant="filled" bind:value={meno} label="Meno" type="text" />
<TextField variant="filled" bind:value={email} label="Email" type="email" />
<TextField variant="filled" bind:value={heslo} label="Heslo" type="password" />
<TextField
    variant="filled"
    bind:value={hesloConfirm}
    label="Potvrdiť heslo"
    type="password"
/>

<div
    class="g-recaptcha"
    data-sitekey={config.captchaSiteKey}
    data-theme="light"
    data-callback="captchaCallback"
/>

<Button variant="raised" disabled={captcha === null}>Registrovať</Button>
