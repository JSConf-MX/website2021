<template>
  <div>
    <Header />
    <div class="grid__row">
      <right-menu/>
      <div class="grid__container">
        <hero/>
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
export default {
  name: 'index',
  components: {
    Header,
    Footer,
    rightMenu,
    hero
  }
}
</script>

<style lang="scss">

</style>
