<template>
    <div class="hero">
          <p class="hero__title">
            {{ $t('hero.title') }}
          </p>
          <a class="hero__button" href="#" target="_blank">
            {{ $t('hero.button') }}
          </a>
        </div>
</template>

<style lang="scss" scoped>
.hero {
  background-image: url('../static/site/hero.svg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding: 30px 15px;
  min-height: 295px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  &__title {
    color: $white;
    font-family: $pixeled;
    font-size: 20px;
  }
  &__button {
    background-color: $pink;
    border: 1px solid $white;
    text-decoration: none;
    font-family: $bold;
    font-size: 23px;
    color: $white;
    padding: 15px 10px;
    border-radius: 3px;
    &:hover{
      background-image: url('../static/site/sparkle.gif');
      background-size: contain;
      background-repeat: repeat;
      background-color: $white;
      color: $pink
    }
  }
}
@keyframes slidebg {
  to {
    background-position:20vw;
  }
}

</style>