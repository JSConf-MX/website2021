<template>
  <footer class="footer">
    <span class="footer__text">{{ $t('footer.rights') }}</span>
  </footer>
</template>

<style lang="scss"  scoped>
.footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px 10px;
  &__text {
    font-family: $regular;
    font-size: 12px;
    text-align: center;
    color: $white;
  }
}
</style>