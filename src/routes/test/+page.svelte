<div class="container">
    <div class="max">
        <h1>Už 6. decembra</h1>
        <div class="things">
            <span>18 úloh</span>
            <span>18 lekcií</span>
            <span>18 dní</span>
        </div>
        <p class="justify">
            sa začne súťaž <b>advent programovania</b>. Nebudete len súťažiť v
            programovaní, ale každý deň bude úlohu sprevádzať aj lekcia/intro do
            problematiky
        </p>
        <p>Pripravujú ju pre vás</p>
        <p><a href="https://pavolkomlos.xyz/">Pavol Komloš</a></p>
        <p><a href="https://harmansky.xyz">Adam Harmanský</a></p>
    </div>
</div>

<style lang="scss">
    * {
        text-align: center;
    }
    
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .max {
        // max-width: 600px;
    }
    
    .things {
        display: flex;
        justify-content: center;
        gap: 10%;

        span {
            font-size: 1.5em;
        }
    }

    .justify {
        // text-align: justify;
        padding: 1em 0;
    }

    h1 {
        font-size: 3em;
    }

    p {
        font-weight: 500;
        font-size: 1.5em;
    }
</style>
