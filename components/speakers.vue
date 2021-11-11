<template>
    <div id="speakers">
        <div class="speakers__header">
        <span class="speakers__title">{{ $t('speakers.title') }}</span>
        </div>
        <div class="speakers__container">
            <div v-for="(speaker, index) in speakers" :key="index" class="speaker__container">
              <div class="speaker__content">
                <a
                  v-if="speaker.link !== ''"
                  :href="speaker.link"
                  :target="_blank"
                  class="speaker__link"
                >
                  <h2 class="speaker__name">
                    {{speaker.name}}
                    <img class="speaker__icon" src="/icons/external-link.png"/>
                  </h2>
                </a>
                <h2 v-else class="speaker__name">
                    {{speaker.name}}
                </h2>
                <h3 class="speaker__title">{{speaker.title}}</h3>
                <p class="speaker__paragraph">
                  {{speaker.abstract}}
                </p>
              </div>
              <div class="speaker__photo">
                <img class="speaker__photo-img" :src="speaker.img" :alt="speaker.name">
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import { speakers } from '~/utils/speakers'
export default {
  data() {
    return {
      speakers
    }
  }
}
</script>

<style lang="scss" scoped>
#speakers {
    margin-bottom: 30px;
}
.speakers {
  &__container {
    background-color: $white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 30px 15px;
  }
  &__header {
    background-color: $red-orange;
    padding: 10px 15px;
  }
  &__title {
    font-family: $bold;
    font-size: 26px;
    color: $white;
  }
}
.speaker {
  &__container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-left: 9px solid $dark-purple;
    border-radius: 4px;
    padding: 15px;
    box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.1), 7px 7px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    &:last-of-type {
      margin-bottom: 0;
    }
    @include under($breakpoint-menu) {
      flex-direction: column-reverse;
      justify-content: center;
    }
  }
  &__link {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      text-decoration-color: $pink;
    }
  }
  &__icon {
    width: 100%;
    max-width: 11px;
  }
  &__content {
    width: calc(80% - 15px);
    @include under($breakpoint-menu) {
      width: 100%;
    }
  }
  &__name {
    font-family: $bold;
    font-size: 14px;
    color: $pink;
    margin-bottom: 15px;
    @include under($breakpoint-menu) {
      text-align: center;
      margin-top: 15px;
    }
  }
  &__title {
    font-family: $bold;
    font-size: 14px;
    color: $dark-purple;
    margin-bottom: 10px;
  }
  &__paragraph {
    font-family: $regular;
    font-size: 12px;
    color: $dark-purple;
  }
  &__photo {
    width: 20%;
    @include under($breakpoint-menu) {
      width: 100%;
      text-align: center
    }
    &-img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
      border: 1px solid $dark-purple;
      object-fit: cover;
      @include under($breakpoint-menu) {
        margin: 0 auto;
      }
    }
  }
}
</style>
