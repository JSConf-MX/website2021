<template>
  <footer class="footer">
    <a class="footer__link" href="https://twitter.com/jsconfmx" target="_blank">
      <img class="footer__icon footer__icon-twitter" src="/icons/socialmedia/twitter.svg" alt="twitter logo">
      @jsconfmx
    </a>
    <a class="footer__link" href="https://www.instagram.com/jsconfmx/" target="_blank">
      <img class="footer__icon footer__icon-instagram"  src="/icons/socialmedia/instagram.svg" alt="instagram logo">
      @jsconfmx
    </a>
    <a class="footer__link" href="https://www.facebook.com/JSConfMexico" target="_blank">
      <img class="footer__icon footer__icon-facebook" src="/icons/socialmedia/facebook.svg" alt="facebook logo">
      JSConf MX
    </a>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: $lila;
  margin-top: -72px;
  min-height: 85px;
  z-index: 4;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  &__link {
    text-decoration: none;
    margin-right: 20px;
    color: $purple;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    opacity: 0.6;
    font-family: $regular;
    font-size: 12px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  &__icon {
    width: 100%;
    margin-bottom: 5px;
    &-twitter {
      max-width: 38px;
    }
    &-instagram {
      max-width: 30px;
    }
    &-facebook {
      max-width: 15px;
    }
  }
}
</style>
