<template>
  <div class="coc-hero">
    <h2 class="coc-hero__title">Codigo de conducta</h2>
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
  &__title {
    font-size: 20px;
    color: $white;
    font-family: $pixeled;
    text-align: right;
  }
}
</style>