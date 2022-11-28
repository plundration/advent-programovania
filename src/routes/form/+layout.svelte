<div class="form">
    <slot />
</div>

<style lang="scss">
    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 60%;
        gap: 1em;
        padding: 6vh 3vw;
    }
</style>
