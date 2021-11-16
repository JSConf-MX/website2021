<template>
    <div>
        <Header />
        <div class="grid grid__row">
            <right-menu/>
            <div class="grid__container">
                <jobs-hero/>
                <div class="jobs" v-for="(job, index) in  $t('jobs.jobs')" :key="index">
                    <div class="jobs__header">
                        <span class="jobs__title">
                            {{job.title}}
                        </span>
                    </div>
                    <div class="jobs__container">
                        <div class="jobs__photo">
                            <img class="jobs__decoration" src="/site/sponsors/globant.png" alt="Globant is an IT and Software Development company">
                        </div>
                        <div class="jobs__paragraph">
                            {{job.description}}
                            <span class="jobs__paragraph--bold">
                                {{job.descriptionBold}}
                            </span>
                            <a
                                class="jobs__button"
                                :href="job.link"
                                target="_blank"
                            >
                                <img class="jobs__button-icon" src="/site/start.png" alt="start icon">
                                {{ $t('jobs.button') }}
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
import jobsHero from '~/components/jobs/jobs-hero.vue'
import sideBar from '~/components/side-bar.vue'
import { jobs } from '~/utils/jobs'
export default {
  components: {
    Header,
    Footer,
    rightMenu,
    jobsHero,
    sideBar
  },
  data() {
    return {
      jobs
    }
  }
}
</script>

<style lang="scss" scoped>
.jobs {
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
    background-color: $red-orange;
    text-decoration: none;
    font-family: $pixeled;
    font-size: 13px;
    color: $white;
    padding: 5px;
    border-radius: 20px;
    width: auto;
    text-align: center;
    margin: 10px 0px 0px auto;
    z-index: 1;
    border: 1px solid transparent;
    &:hover{
        background-color: rgba($color: $red-orange, $alpha: 0.7);
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
