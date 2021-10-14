<template>
    <div id="sponsors">
        <div class="sponsor__header">
        <span class="sponsor__title">{{ $t('sponsors.title') }}</span>
        </div>
        <div class="sponsor__container">
            <div class="sponsor__photo">
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
    margin: 10px auto 0;
    z-index: 1;
    border: 1px solid transparent;
    &:hover{
      background-image: url('../static/site/sparkle.gif');
      background-size: contain;
      background-repeat: repeat;
      background-color: $white;
      color: $pink;
      border: 1px solid $pink;
    }
  }
}
</style>
