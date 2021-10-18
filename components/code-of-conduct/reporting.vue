<template>
    <div id="coc-purpose">
        <div class="coc-purpose__header">
            <span class="coc-purpose__title"> {{ $t('cocHero.purposeTitle') }}</span>
        </div>
        <div class="coc-purpose__container">
            <div class="coc-purpose__paragraph">
                {{ $t('cocHero.purposeContent1') }}
                <br><br>
                {{ $t('cocHero.purposeContent2') }}
                <br><br>
                {{ $t('cocHero.purposeContent3') }}
            </div>
            <img class="coc-purpose__image" src="/site/mario.png" alt="old mario bros">
            <h2 class="coc-purpose__title coc-purpose__title--purple">
                {{ $t('cocHero.subtitle') }}
            </h2>
            <p class="coc-purpose__paragraph">
                {{ $t('cocHero.reportingContent1') }}
                <br><br>
                {{ $t('cocHero.reportingContent2') }}
            </p>
            <div class="coc-purpose__bullet">
                <img class="coc-purpose__bullet-icon" src="/site/red-pacman.png" alt="red ghost pacman">
                <p class="coc-purpose__paragraph coc-purpose__paragraph--width">
                    {{ $t('cocHero.reportingBullet1') }}
                </p>
            </div>
            <div class="coc-purpose__bullet">
                <img class="coc-purpose__bullet-icon" src="/site/blue-pacman.png" alt="blue ghost pacman">
                <p class="coc-purpose__paragraph coc-purpose__paragraph--width">
                    {{ $t('cocHero.reportingBullet2') }}
                </p>
            </div>
            <div class="coc-purpose__bullet">
                <img class="coc-purpose__bullet-icon" src="/site/orange-pacman.png" alt="orange ghost pacman">
                <p class="coc-purpose__paragraph coc-purpose__paragraph--width">
                    {{ $t('cocHero.reportingBullet3') }}
                </p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
#coc-purpose {
    margin-bottom: 30px;
}
.coc-purpose {
    &__bullet {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 15px;
        &-icon {
            max-width: 30px;
            width: 30px;
        }
    }
    &__container {
        background-color: $white;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 30px 20px;
    }
    &__header {
        background-color: $light-purple;
        padding: 10px 15px;
    }
    &__title {
        font-family: $bold;
        font-size: 26px;
        color: $white;
        &--purple {
            color: $light-purple;
            margin-bottom: 20px;
        }
    }
        &__paragraph {
        width: 100%;
        color: $purple;
        font-size: 14px;
        font-family: $regular;
        line-height: 21px;
        &--width {
            width: calc(100% - 45px);
        }
    }
    &__image {
        width: 100%;
        max-width: 100%;
        margin-bottom: 30px;
        margin-top: 30px;
    }
}
</style>
