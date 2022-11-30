<form class="form" method="POST">
    <slot />
</form>

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
