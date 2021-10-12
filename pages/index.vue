<template>
  <div>
    <Header />
    <div class="grid grid__row">
      <right-menu/>
      <div class="grid__container">
        <hero/>
        <about/>
        <sponsors/>
        <speakers/>
      </div>
      <div class="grid__container-side">
        <side-bar/>
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
import sponsors from '~/components/sponsors.vue'
import speakers from '~/components/speakers.vue'
import sideBar from '~/components/side-bar.vue'
export default {
  name: 'index',
  components: {
    Header,
    Footer,
    rightMenu,
    hero,
    about,
    sponsors,
    speakers,
    sideBar
  }
}
</script>

<style lang="scss">

</style>
