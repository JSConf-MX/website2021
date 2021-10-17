<template>
  <div id="enforcement">
    <div class="enforcement__header">
        <span class="enforcement__title">{{ $t('cocHero.enforcementTitle') }}</span>
    </div>
    <div class="enforcement__container">
        <div class="enforcement__paragraph">
            {{ $t('cocHero.enforcementDescription1') }}
            <br><br>
            {{ $t('cocHero.enforcementDescription2') }}
            <br><br>
            {{ $t('cocHero.enforcementDescription3') }}
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#enforcement {
  margin-bottom: 30px;
}
.enforcement {
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
    background-color: $orange;
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
    line-height: 21px;
  }

}
</style>
