<template>
  <div class="header">
    <div class="header__logo-container">
      <img class="header__logo" src="/logo.svg" alt="JSConf Mexico logo 2021">
      <h1 class="header__logo-title">JSConf México</h1>
    </div>
    <div class="header__btn-container">
      <nuxt-link to="/" class="header__btn header__btn--active">ES</nuxt-link>
      <nuxt-link to="/" class="header__btn">EN</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  width: 100%;
  border-bottom: 3px solid $dark-purple;
  &__btn {
    &-container {
      display: flex;
      flex-direction: revert;
      flex-wrap: wrap;
      align-items: center;
    }
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: $light-orange;
    font-family: $bold;
    font-size: 14px;
    padding: 9px;
    text-decoration: none;
    opacity: 0.6;
    &--active {
      opacity: 1;
      background-color: $light-red;
    }
    &:first-of-type {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
  &__logo {
    width: 100%;
    max-width: 50px;
    &-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
    &-title {
      font-family: $pixeled;
      font-size: 14px;
      color: $purple;
      margin-left: 10px;
      @include under($breakpoint-nav) {
        display: none;
      }
    }
  }
}
</style>