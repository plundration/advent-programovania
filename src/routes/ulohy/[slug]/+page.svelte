<script lang="ts">
    import Button from '$/components/Button.svelte';
    import { goto, invalidate } from '$app/navigation';
    import { page } from '$app/stores';
    import type { PageData } from './$types';

    export let data: PageData;

    let cisloUlohy = parseInt($page.url.pathname.replace(/^.*\//, ''));
    let files: FileList | null = null;

    let odovzdane: boolean = false;
    if (data.submissions && data.submissions[cisloUlohy - 1]) odovzdane = true;

    function onSubmit() {
        if (!files) return;

        let formData = new FormData();
        formData.append('file', files[0]);

        fetch(`/ulohy/${cisloUlohy}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => {
                window.location.href = '/'; // todo need to refresh page with goto somehow
            })
            .catch(err => {
                goto('/error');
            });
    }
</script>

<div class="title">
    <h1>Úloha {cisloUlohy}</h1>
    <h4>{cisloUlohy + 5}. 12. 2022</h4>
</div>

<article class="markdown-article">
    <svelte:component this={data.content} />
</article>

{#if data.user}
    <div class="submission">
        {#if odovzdane}
            <div class="is-submitted">
                Už odovzdané
                <img
                    class="check"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg"
                    alt="checkmark"
                />
            </div>
        {/if}
        <div class="file-form">
            <div class="file-picker">
                <label>
                    Vyberte súbor
                    <input name="file" accept="text/*" bind:files type="file" />
                </label>
                {#if files}
                    {#each files as file}
                        <span>{file.name}</span>
                    {/each}
                {/if}
            </div>
            <Button disabled={!files || files.length === 0} onClick={onSubmit}>Odovzdať</Button>
        </div>
    </div>
{:else}
    <div class="submission">
        <p>Registrujte sa pre odovzdanie</p>
        <Button onClick={() => goto('/')}>Registrácia</Button>
    </div>
{/if}

<style lang="scss">
    @import '../../../Settings.scss';

    .title {
        text-align: center;
        margin: 1em;
    }

    @media screen and (min-width: $mobile-width) {
        article {
            font-size: 0.8em;
        }
    }

    :global {
        .markdown-article {
            p {
                margin: 0.5em 0;
            }
            h1,
            h2,
            h3,
            h4 {
                margin: 1em 0 0.2em 0;
            }
        }
    }

    .submission {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1em;
        margin: 1em;
    }

    .is-submitted {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }

    .check {
        color: $clr-checkmark;
        height: 2em;
        width: auto;
        display: inline-block;
    }

    .file-form {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2em;
        flex-wrap: wrap;
    }

    .file-picker {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
    }

    input {
        display: none;
    }

    label {
        cursor: pointer;
        background-color: $clr-sec;
        border-radius: 0.2em;
        padding: 0.3em 0.4em;
        transition: 0.1s;

        &:hover {
            filter: brightness(1.1);
            transform: scale(1.05);
        }
    }
</style>
