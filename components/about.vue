<template>
    <div id="about">
        <div class="about__header">
        <span class="about__title"> {{ $t('about.title') }}</span>
        </div>
        <div class="about__container">
            <div class="about__paragraph">
               {{ $t('about.description') }}
            </div>
            <div class="about__photo">
                <img class="about__decoration" src="/site/about.png" alt="">
                <img class="about__photo-img" src="/site/community.png" alt="Mexican tech community">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#about {
    margin-bottom: 30px;
}
.about {
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
    background-color: $orange;
    padding: 10px 15px;
  }
  &__title {
    font-family: $bold;
    font-size: 26px;
    color: $white;
  }
  &__photo {
    width: 50%;
    position: relative;
    @include under($breakpoint-menu) {
      width: 100%;
    }
    &-img {
      width: 100%;
    }
  }
  &__paragraph {
    width: calc(50% - 20px);
    color: $purple;
    font-size: 14px;
    font-family: $regular;
    line-height: 21px;
    @include under($breakpoint-menu) {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  &__decoration {
    width: 100%;
    position: absolute;
    top: -20%;
    left: -10%;
    max-width: 80px;
    @include under($breakpoint-menu) {
      display: none;
    }
  }
}
</style>
