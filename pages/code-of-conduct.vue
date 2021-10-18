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
                <reporting/>
                <enforcement/>
                <harrasment/>
                <help/>
                <attribution/>
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
import reporting from '~/components/code-of-conduct/reporting.vue'
import enforcement from '~/components/code-of-conduct/enforcement.vue'
import harrasment from '~/components/code-of-conduct/harrasment.vue'
import help from '~/components/code-of-conduct/help.vue'
import attribution from '~/components/code-of-conduct/attribution.vue'
import sideBar from '~/components/side-bar.vue'
export default {
  components: {
    Header,
    Footer,
    rightMenu,
    cocHero,
    reporting,
    sideBar,
    enforcement,
    harrasment,
    help,
    attribution
  }
}
</script>

<style lang="scss" scoped>
.coc-about {
    background-color: $white;
    padding: 30px 20px;
    margin-bottom: 30px;
    &__content {
        color: $dark-purple;
        font-family: $regular;
        font-size: 14px;
        line-height: 21px;
    }
}
</style>
