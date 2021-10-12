<template>
  <header class="header">
    <div class="header__logo-container">
      <img class="header__logo" src="/logo.svg" alt="JSConf Mexico logo 2021">
      <h1 class="header__logo-title">{{ $t('splash.title') }}</h1>
    </div>
    <div class="header__btn-container">
      <nuxt-link
        v-model="selectedValue"
        v-for="(locale, index) in $i18n.locales"
        :to="switchLocalePath(locale.code)"
        :key="index"
        :value="locale.code"
        class="header__btn"
        :class="{'header__btn--active': selectedValue == locale.code}"
      >
        {{locale.code}}
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: ""
    };
  },
  created() {
    this.selectedValue = this.$i18n.locale;
  }
}
</script>

<style lang="scss">
.header {
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 7px 15px;
  width: 100%;
  // border-bottom: 3px solid $dark-purple;
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
    text-transform: uppercase;
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
    max-width: 40px;
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