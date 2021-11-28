<template>
    <div id="sponsors">
        <div class="sponsor__header">
        <span class="sponsor__title">{{ $t('sponsors.title') }}</span>
        </div>
        <div class="sponsor__container">
          <div class="sponsor__buttons-container">
            <NuxtLink to="/virtual-kit" class="sponsor__button">
              {{ $t('sponsors.virtualKit') }}
            </NuxtLink>
            <NuxtLink to="/jobs" class="sponsor__button">
              {{ $t('sponsors.positions') }}
            </NuxtLink>
          </div>
            <!-- <div class="sponsor__photo">
              <img class="sponsor__decoration" src="/site/tamagochi.png" alt="handheld digital pet">
            </div>
            <div class="sponsor__paragraph">
              {{ $t('sponsors.description') }}
              <a class="sponsor__button" href="https://docs.google.com/presentation/d/112hkUEV1XQDAHL6T7BSx-uIZ-fUlmm6iaQZIkpUiDtc/edit?usp=sharing" target="_blank">
                {{ $t('sponsors.button') }}
              </a>
            </div>
            <div class="sponsor__shadow">
              <img class="sponsor__shadow-img" src="/site/lila-shadow.png" alt="shadow in lila color">
            </div> -->
            <div class="sponsor__row-column">
              <img src="/site/sponsors/platinum.svg" alt="platinum sponsors">
              <div class="sponsor__row">
                 <div class="sponsor__column-1-1">
                  <a href="https://www.luxoft.com/" target="_blank" rel="noopener noreferrer">
                    <img class="sponsor__logo" src="/site/sponsors/luxoft.png" alt="Luxoft, a DXC Technology Company, is a digital strategy and software engineering firm">
                  </a>
                </div>
                <div class="sponsor__column-1-1">
                  <a href="https://www.globant.com/" target="_blank" rel="noopener noreferrer">
                    <img class="sponsor__logo" src="/site/sponsors/globant.png" alt="Globant is an IT and Software Development company">
                  </a>
                </div>
              </div>
            </div>
            <div class="sponsor__row-column">
              <img src="/site/sponsors/gold.svg" alt="gold sponsors">
              <div class="sponsor__row">
                <div class="sponsor__column-1-2">
                  <a href="https://andela.com/join-andela/" target="_blank" rel="noopener noreferrer">
                    <img class="sponsor__logo" src="/site/sponsors/andela.png" alt="andela is an American company that identifies and develops software developers">
                  </a>
                </div>
                <div class="sponsor__column-1-2">
                  <a href="https://www.nextiva.com/" target="_blank" rel="noopener noreferrer">
                    <img class="sponsor__logo" src="/site/sponsors/nextiva.png" alt="Nextiva is a Connected Communications company that helps businesses grow faster.">
                  </a>
                </div>
                <div class="sponsor__column-1-2">
                  <a href="https://www.storyblok.com/home" target="_blank" rel="noopener noreferrer">
                   <img class="sponsor__logo" src="/site/sponsors/storyblok.png" alt="Storyblok is a user friendly and powerful headless CMS.">
                  </a>
                </div>
              </div>
            </div>
            <div class="sponsor__row-column">
              <img src="/site/sponsors/silver.svg" alt="silver sponsors">
              <div class="sponsor__row">
                <div class="sponsor__column-1-3">
                  <a href="https://www.wizeline.com/" target="_blank" rel="noopener noreferrer">
                    <img class="sponsor__logo" src="/site/sponsors/wizeline.png" alt="Wizeline is a global product development company that helps its clients solve their biggest challenges with design and technology.">
                  </a>
                </div>
              </div>
            </div>
            <div class="sponsor__row-column">
              <img src="/site/sponsors/support.svg" alt="support sponsors" style="margin-bottom: 20px">
              <div class="sponsor__row">
                <div class="sponsor__column-1-4">
                  <a href="https://twitter.com/mytypeofradio" target="_blank" rel="noopener noreferrer">
                    <img class="sponsor__logo" src="/site/sponsors/mtr.png" alt="Un podcast de desarrollo web en español">
                  </a>
                </div>
                <div class="sponsor__column-1-4 sponsor__column-1-2--mb">
                  <a href="https://technolatinas.org/" target="_blank" rel="noopener noreferrer">
                    <img class="sponsor__logo" src="/site/sponsors/technolatinas.png" alt="es una red de apoyo para cualquier persona que se identifique como latina en tecnología.">
                  </a>
                </div>
                <div class="sponsor__column-1-4">
                  <a href="https://twitter.com/noobsjs" target="_blank" rel="noopener noreferrer">
                    <img class="sponsor__logo" src="/site/sponsors/NoobsJS.png" alt="Comunidad de NoobsJS. ">
                  </a>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#sponsors {
  margin-bottom: 30px;
}
.sponsor {
  &__container {
    background-color: $white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px 15px;
  }
  &__buttons {
    &-container {
      display: none;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      @include under($breakpoint-menu) {
        display: flex;
      }
    }
  }
  &__header {
    background-color: $light-purple;
    padding: 10px 15px;
  }
  &__title {
    font-family: $bold;
    font-size: 26px;
    color: $white;
  }
  &__photo {
    width: 30%;
    position: relative;
    z-index: 1;
    @include under($breakpoint-menu) {
      display: none;
    }
    &-img {
      width: 100%;
    }
  }
  &__paragraph {
    width: calc(70% - 20px);
    color: $purple;
    font-size: 14px;
    font-family: $regular;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 21px;
    @include under($breakpoint-menu) {
      width: 100%;
    }
  }
  &__decoration {
    width: 100%;
    margin: 0 auto;
    max-width: 100px;
    display: block;
  }
  &__shadow {
    width: 100%;
    z-index: 0;
    margin-top: -10px;
    &-img {
      max-width: 100%;
    }
  }
  &__button {
    background-color: $pink;
    text-decoration: none;
    font-family: $bold;
    font-size: 19px;
    color: $white;
    padding: 8px 10px;
    border-radius: 3px;
    width: auto;
    text-align: center;
    margin: 0 0 30px 0;
    z-index: 1;
    border: 1px solid transparent;
    @include under($breakpoint-menu) {
      margin: 0 auto 10px;
    }
    &:hover{
      background-image: url('../static/site/sparkle.gif');
      background-size: contain;
      background-repeat: repeat;
      background-color: $white;
      color: $pink;
      border: 1px solid $pink;
    }
  }
  &__row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    &-column {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
    }
  }
  &__column {
    &-1 {
      width: 100%;
      &-2 {
        width: calc(100%/2);
        &--mb {
          @include under($breakpoint-menu) {
            margin: 20px 0px;
          }
        }
      }
      &-3 {
        width: calc(100%/3);
        margin-top: 30px;
      }
      &-4 {
        width: calc(100%/4);
      }
    }
  }
  &__logo {
    width: 100%;
  }
}
</style>
