<template>
  <div class="jobs-hero">
    <h2 class="jobs-hero__title">
      {{ $t('jobs.hero') }}
    </h2>
  </div>
</template>

<style lang="scss">
.jobs-hero {
  background-image: url('../../static/site/coins.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 295px;
  background-position: left;
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
      width: auto;
    }
  }
}
</style>