<template>
  <div class="coc-hero">
    <h2 class="coc-hero__title">
      {{ $t('cocHero.title') }}
    </h2>
  </div>
</template>

<style lang="scss">
.coc-hero {
  background-image: url('../../static/site/dog-ducks.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 245px;
  background-position: right;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 30px 0px;
  @include under($breakpoint-sm) {
    background-position: left;
  }
  &__title {
    font-size: 20px;
    color: $white;
    font-family: $pixeled;
    text-align: right;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: rgba($color: $dark-purple, $alpha: 0.4);
    @include under($breakpoint-sm) {
      background-color: rgba($color: $dark-purple, $alpha: 0.6);
      text-align: center;
      width: 100%;
    }
  }
}
</style>