<template>
  <div>
    <Header />
    <div class="grid grid__row">
      <right-menu/>
      <div class="grid__container">
        <hero/>
        <about/>
      </div>
      <div class="grid__container-side">

      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import rightMenu from '~/components/right-menu.vue'
import hero from '~/components/hero.vue'
import about from '~/components/about.vue'
export default {
  name: 'index',
  components: {
    Header,
    Footer,
    rightMenu,
    hero,
    about
  }
}
</script>

<style lang="scss">

</style>
