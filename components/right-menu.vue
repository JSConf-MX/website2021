<template>
    <div class="grid__container-menu menu__container">
        <a class="menu__button" href="#about">
          {{ $t('menu.about') }}
        </a>
        <a class="menu__button" href="#sponsors">
          {{ $t('menu.sponsors') }}
        </a>
        <a class="menu__button" href="#speakers">
          {{ $t('menu.speakers') }}
        </a>
        <a class="menu__button" href="#team">
          {{ $t('menu.team') }}
        </a>
        <a class="menu__button" href="#social">
          {{ $t('menu.social') }}
        </a>
    </div>
</template>

<style lang="scss">
.menu {
  &__container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
    @include under($breakpoint-lg) {
      position: sticky;
      top: 54px;
      flex-direction: row;
      width: 100%;
      z-index: 99;
      background: rgba(255,255,255,0.6);
    }
    @include under($breakpoint-menu) {
      display: none;
    }
  }
  &__button {
    width: 100%;
    min-height: 30px;
    background-color: $white;
    font-family: $bold;
    font-size: 14px;
    color: $purple;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
    @include under($breakpoint-lg) {
      width: auto;
      border: 1px solid $purple;
      margin-right: 5px;
      margin-bottom: 0;
    }
    &:hover {
      background-image: url('../static/site/sparkle.gif');
      background-size: contain;
      background-repeat: repeat;
    }
  }
}
</style>
