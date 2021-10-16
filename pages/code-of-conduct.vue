<template>
  <div>
    <Header />
    <div class="grid grid__row">
      <right-menu/>
      <div class="grid__container">
        <coc-hero/>
        <div class="coc-about">
            <p class="coc-about__content">
                {{ $t('cocHero.content') }}
            </p>
        </div>
      </div>
      <side-bar/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import rightMenu from '~/components/right-menu.vue'
import cocHero from '~/components/code-of-conduct/coc-hero.vue'
import sideBar from '~/components/side-bar.vue'
export default {
  components: {
    Header,
    Footer,
    rightMenu,
    cocHero,
    sideBar
  }
}
</script>

<style lang="scss" scoped>
.coc-about {
    background-color: $white;
    padding: 30px 20px;
    &__content {
        color: $dark-purple;
        font-family: $regular;
        font-size: 14px;
        line-height: 21px;
    }
}
</style>
