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
    &:hover {
      background-image: url('../static/site/sparkle.gif');
      background-size: contain;
      background-repeat: repeat;
    }
  }
}
</style>
