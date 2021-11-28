<template>
    <div>
        <Header />
        <div class="grid grid__row">
            <right-menu/>
            <div class="grid__container">
                <cover/>
                <div class="kit" v-for="(kit, index) in  $t('virtualKit.kits')" :key="index">
                    <div class="kit__header">
                        <span class="kit__title">
                            {{kit.title}}
                        </span>
                    </div>
                    <div class="kit__container">
                        <div class="kit__photo">
                            <img class="kit__decoration" :src="kit.logo" alt="Globant is an IT and Software Development company">
                        </div>
                        <div class="kit__paragraph">
                            {{kit.description}}
                            <span class="kit__paragraph--bold">
                                {{kit.descriptionBold}}
                            </span>
                            <a
                                v-if="kit.link.length > 0"
                                class="kit__button"
                                :href="kit.link"
                                target="_blank"
                            >
                                <img class="kit__button-icon" src="/site/virtual_kit/treasure.png" alt="treasure icon">
                                {{ $t('virtualKit.button') }}
                            </a>
                        </div>
                    </div>
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
import cover from '~/components/virtual-kit/cover.vue'
import sideBar from '~/components/side-bar.vue'
export default {
  components: {
    Header,
    Footer,
    rightMenu,
    cover,
    sideBar
  }
}
</script>

<style lang="scss" scoped>
.kit {
    margin-bottom: 30px;
  &__container {
    background-color: $white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px 20px;
  }
  &__header {
    background-color: $light-purple;
    padding: 10px 15px;
  }
  &__title {
    font-family: $bold;
    font-size: 26px;
    color: $white;
  }
  &__photo {
    width: 30%;
    position: relative;
    z-index: 1;
    @include under($breakpoint-menu) {
      display: none;
    }
    &-img {
      width: 100%;
    }
  }
  &__paragraph {
    width: calc(70% - 20px);
    color: $purple;
    font-size: 14px;
    font-family: $regular;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 21px;
    &--bold {
        font-weight: bold;
        margin-top: 20px;
    }
    @include under($breakpoint-menu) {
      width: 100%;
    }
  }
  &__decoration {
    width: 100%;
  }
  &__button {
    background-color: $dark-purple;
    text-decoration: none;
    font-family: $pixeled;
    font-size: 13px;
    color: $white;
    padding: 5px 10px;
    border-radius: 20px;
    width: auto;
    text-align: center;
    margin: 10px 0px 0px auto;
    z-index: 1;
    border: 1px solid transparent;
    &:hover{
        background-color: rgba($color: $dark-purple, $alpha: 0.7);
    }
    @include under($breakpoint-menu) {
      margin: 10px auto;
    }
    &-icon {
        width: 20px;
    }
  }
  &__row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    &-column {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
    }
  }
  &__column-1-2 {
    width: calc(100%/2);
    @include under($breakpoint-menu) {
      width: 100%;
    }
    &--mb {
      @include under($breakpoint-menu) {
        margin: 20px 0px;
      }
    }
  }
  &__logo {
    width: 100%;
  }
}
</style>
