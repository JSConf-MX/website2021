<template>
  <div class="cover">
    <h2 class="cover__title">
      {{ $t('virtualKit.title') }}
    </h2>
  </div>
</template>

<style lang="scss">
.cover {
  background-image: url('../../static/site/virtual_kit/cover.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 295px;
  background-position: left;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  @include under($breakpoint-sm) {
    background-position: left;
  }
  &__title {
    font-size: 20px;
    color: $white;
    font-family: $pixeled;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: -50px;
    background-color: rgba($color: $dark-purple, $alpha: 0.4);
    @include under($breakpoint-sm) {
      background-color: rgba($color: $dark-purple, $alpha: 0.6);
      width: auto;
    }
  }
}
</style>