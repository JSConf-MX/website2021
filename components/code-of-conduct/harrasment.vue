<template>
  <div id="harrasment">
    <div class="harrasment__header">
        <span class="harrasment__title">{{ $t('cocHero.harrasmentTitle') }}</span>
    </div>
    <div class="harrasment__container">
        <div class="harrasment__paragraph">
            {{ $t('cocHero.harrasmentContent') }}
            <br><br>
        </div>
        <div>
            <div class="harrasment__list">
                <img src="/site/bomb.png" alt="bomb">
                <span class="harrasment__paragraph harrasment__paragraph--width">{{ $t('cocHero.harrasmentBullet1') }}</span>
            </div>
            <div class="harrasment__list">
                <img src="/site/bomb.png" alt="bomb">
                <span class="harrasment__paragraph harrasment__paragraph--width">{{ $t('cocHero.harrasmentBullet2') }}</span>
            </div>
            <div class="harrasment__list">
                <img src="/site/bomb.png" alt="bomb">
                <span class="harrasment__paragraph harrasment__paragraph--width">{{ $t('cocHero.harrasmentBullet3') }}</span>
            </div>
            <div class="harrasment__list">
                <img src="/site/bomb.png" alt="bomb">
                <span class="harrasment__paragraph harrasment__paragraph--width">{{ $t('cocHero.harrasmentBullet4') }}</span>
            </div>
            <div class="harrasment__list">
                <img src="/site/bomb.png" alt="bomb">
                <span class="harrasment__paragraph harrasment__paragraph--width">{{ $t('cocHero.harrasmentBullet5') }}</span>
            </div>
            <div class="harrasment__list">
                <img src="/site/bomb.png" alt="bomb">
                <span class="harrasment__paragraph harrasment__paragraph--width">{{ $t('cocHero.harrasmentBullet6') }}</span>
            </div>
            <div class="harrasment__list">
                <img src="/site/bomb.png" alt="bomb">
                <span class="harrasment__paragraph harrasment__paragraph--width">{{ $t('cocHero.harrasmentBullet7') }}</span>
            </div>
            <div class="harrasment__list">
                <img src="/site/bomb.png" alt="bomb">
                <span class="harrasment__paragraph harrasment__paragraph--width">{{ $t('cocHero.harrasmentBullet8') }}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#harrasment {
  margin-bottom: 30px;
}
.harrasment {
  &__container {
    background-color: $white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
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
  &__paragraph {
    width: 100%;
    color: $purple;
    font-size: 14px;
    font-family: $regular;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &--width {
        width: calc(100% - 30px);
    }
  }
  &__list {
     display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
  }

}
</style>
