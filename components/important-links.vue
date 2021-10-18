<template>
    <div class="links__container">
        <img class="links__img" src="/site/game.png" alt="old video game console">
        <ul class="links__list">
            <li class="links__item">
                <NuxtLink to="/code-of-conduct" class="links__anchor">
                    {{ $t('links.coc') }}
                </NuxtLink>
            </li>
            <li class="links__item">
                <a class="links__anchor" href="#">
                    {{ $t('links.faq') }}
                </a>
            </li>
            <li class="links__item">
                <a class="links__anchor" href="https://2020.jsconf.mx" target="_blank">
                    {{ $t('links.edition') }}
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.links {
    &__container {
        margin-top: 30px;
        position: relative;
        @include under($breakpoint-md) {
            background-color: $green;
            border: 15px solid $brown;
        }
    }
    &__img {
        width: 100%;
        z-index: 0;
        @include under($breakpoint-md) {
            display: none;
        }
    }
    &__list {
        position: absolute;
        top: 7%;
        list-style: none;
        padding: 0;
        width: 100%;
        min-height: 238px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        @include under($breakpoint-md) {
            position: relative;
        }
    }
    &__item {
        width: 100%;
        text-align: center;
        max-width: 80%;
    }
    &__anchor {
        color: $orange;
        font-family: $pixeled;
        font-size: 14px;
        text-transform: uppercase;
        &:hover {
            color: $pink;
            text-decoration: none;
        }
    }
}
</style>