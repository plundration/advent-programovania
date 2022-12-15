<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<h1>Advent programovania</h1>

<p>
    Advent programovania 2022 je súťaž v programovaní s 18 úlohami od 6. po 23.
    decembra. Tohtoročný advent pokračuje v šľapajách minuloročného a navyše
    bude každá úloha sprevádzaná krátkou lekciou/vysvetlením problematiky.
</p>

<h2> OZNAM: Z dôvodu (veľmi) nízkeho záujmu sa súťaž ruší. Ak by sa záujem obnovil, kontaktujte nás na adresách na spodku stránky </h2>

<div class="ulohy">
    <h2>Úlohy</h2>
    <div class="grid">
        {#each Array(18) as _, index (index)}
            {#if index + 1 <= data.day}
                <a
                    class="grid-item"
                    class:item-done={data.submissions && data.submissions[index]}
                    href="/ulohy/{index + 1}"
                >
                    <div class="item-title">{index + 1}</div>
                    <div class="item-date">{index + 6}. dec</div>
                </a>
            {:else}
                <div class="grid-item item-faded">
                    <div class="item-title">{index + 1}</div>
                    <div class="item-date">{index + 6}. dec</div>
                </div>
            {/if}
        {/each}
    </div>
</div>

<p>
    Bodovací systém je orientovaný tak, aby počet odovzdaných úloh nehral
    najväčšiu rolu v hodnotení, keďže nie každý si vie vždy nájsť čas na
    riešenie.
</p>
<p>
    Úlohy sú hodnotené podľa troch kategórií:
    <b>kreativita, optimalizácia a prehľadnosť kódu.</b>
</p>

<style lang="scss">
    @import '../Settings.scss';

    p {
        margin: 0.8em 0;
    }

    .ulohy {
        margin: 1.5em 0;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 16px;
        margin-top: 0.5em;
    }

    .grid-item {
        display: block;
        padding: 10px;
        border-radius: 9px;
        background-color: $clr-dark-lighter;
        text-align: center;
        text-decoration: none;
        color: $clr-accent1;
        font-weight: 900;
        font-family: $ff-mono;
    }

    .item-title {
        font-size: 1.8em;
    }

    .item-date {
        font-size: 0.7em;
    }

    .item-faded {
        filter: opacity(0.3);
    }
    
    .item-done .item-title::after {
        content: "✓";
    }
        
    .item-done .item-title {
        color: #00b000;
    }
        
    .item-done {
        background-color: #00ff0020;
    }
</style>
