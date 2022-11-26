<script lang="ts">
    import { each } from 'svelte/internal';

    // let day = new Date().getDay() - 5;
    let day = 2;
</script>

<p>
    Advent programovania 2022 je súťaž v programovaní s 18 úlohami od 6. po 23.
    decembra. Tohtoročný advent pokračuje v šľapajách minuloročného a navyše
    bude každá úloha sprevádzaná krátkou lekciou/vysvetlením problematiky.
</p>

<h3>Ulohy</h3>

<div class="grid">
    {#each Array(18) as _, index (index)}
        {#if index + 1 <= day}
            <a class="grid-item" href="/ulohy/{index + 1}">
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

<style lang="scss">
    @import '../Settings.scss';

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 15px;
    }

    .grid-item {
        display: block;
        padding: 10px;
        border-radius: 9px;
        background-color: $clr-dark-lighter;
        text-align: center;
        text-decoration: none;
        color: $clr-accent2;
        font-weight: 900;
        font-family: $ff-mono;
    }

    .item-title {
        font-size: 1.5em;
    }

    .item-date {
        font-size: 0.7em;
    }

    .item-faded {
        filter: opacity(0.5);
    }
</style>
