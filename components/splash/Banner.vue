<template>
  <div class="alert">
    <div class="alert__header">
      {{ $t('splash.coming') }}
    </div>
    <div class="alert__content">
      <img class="alert__icon" src="/icons/alert.svg" alt="alert image">
      <h3 class="alert__text">{{ $t('splash.date') }}</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.alert {
  position: absolute;
  width: calc(100% - 20px);
  max-width: 330px;
  margin: 0 auto;
  top: 29vh;
  background-color: $beige;
  border: 2px solid $blue;
  z-index: 1;
  left: 10px;
  right: 10px;
  border-radius: 4px;
  @include under(sm) {
    top: 42vh;
  }
  &__header {
    background-color: $blue;
    text-align: left;
    padding: 5px 10px;
    color: white;
    font-family: $regular;
    text-transform: uppercase;
    font-size: 21px;
    font-weight: 400;
  }
  &__content {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
  }
  &__icon {
    width: 100%;
    max-width: 70px;
  }
  &__text {
    font-family: $regular;
    font-weight: 400;
    font-size: 21px;
    color: $purple;
    max-width: 180px;
    text-align: left;
  }
}
</style>