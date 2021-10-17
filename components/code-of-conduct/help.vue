<template>
  <div id="help">
    <div class="help__header">
        <span class="help__title">{{ $t('cocHero.helpTitle') }}</span>
    </div>
    <div class="help__container">
        <div class="help__img">
          <h3 class="help__subtitle">{{ $t('cocHero.helpSubtitle') }}</h3>
          <img class="help__img-photo" src="/site/donkey-kong.png" alt="Donkey Kong is a Japanese video game series">
        </div>
        <div class="help__paragraph">
            <span class="">
              {{ $t('cocHero.helpTwitter') }}
              <a class="help__anchor" href="https://twitter.com/jsconfmx" target="_blank">@jsconf.mx</a>
            </span>
            <span class="">
              {{ $t('cocHero.helpEmail') }}
              <a class="help__anchor" href="mailto:report@jsconf.mx" target="_blank">report@jsconf.mx</a>
            </span>
            <span class="">
              {{ $t('cocHero.helpPhone') }}
              <a class="help__anchor" href="tel:+525534202708" target="_blank">+52 553 - 420 - 2708</a>
            </span>
            <br>
            <span>
              {{ $t('cocHero.helpContent') }}
            </span>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#help {
  margin-bottom: 30px;
}
.help {
  &__container {
    background-color: $white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px 15px;
  }
  &__header {
    background-color: $orange;
    padding: 10px 15px;
  }
  &__title {
    font-family: $bold;
    font-size: 26px;
    color: $white;
  }
  &__subtitle {
    color: $pink;
    font-family: $bold;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  &__paragraph {
    width: calc(100% / 2);
    color: $purple;
    font-size: 14px;
    font-family: $regular;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 21px;
  }
  &__img {
    width: calc(100% / 2);
    &-photo {
      width: 100%;
      max-width: 100%;
    }
  }
  &__anchor {
    text-decoration: none;
    color: $purple;
    &:hover {
      text-decoration: underline;
      color: $pink;
    }
  }
}
</style>
