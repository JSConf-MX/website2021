<template>
  <div id="attribution">
    <div class="attribution__container">
        <span class="attribution__title">{{ $t('cocHero.attributionTitle') }}</span>
        <br>
        <br>
        <div class="attribution__paragraph">
            {{ $t('cocHero.attributionContent') }}
            <a class="attribution__anchor" href="https://2019.jsconf.eu/code-of-conduct/" target="_blank">JSConf EU</a>,
            <a class="attribution__anchor" href="https://2018.cssconf.com.au/code-of-conduct" target="_blank">CSSConf / JSConf AU</a>,
            <a class="attribution__anchor" href="https://jsconfbp.com/code-of-conduct" target="_blank">JSConf Budapest</a>,
            <a class="attribution__anchor" href="https://geekfeminism.wikia.org/wiki/Geek_Feminism_Wiki" target="_blank">The Geek Feminism wiki</a>,
            <a class="attribution__anchor" href="https://valerieaurora.org/" target="_blank">the work of Valerie Aurora</a>,
            <a class="attribution__anchor" href="https://wealljs.org/code-of-conduct" target="_blank">WeAllJS</a>,
            {{ $t('cocHero.attributionAnd') }}
            <a class="attribution__anchor" href="https://confcodeofconduct.com/" target="_blank">Conference Code of Conduct.</a>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#attribution {
  margin-bottom: 30px;
}
.attribution {
  &__container {
    background-color: rgba($color: $white, $alpha: 0.8);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px 15px;
  }
  &__title {
    font-family: $bold;
    font-size: 14px;
    color: $dark-purple;
  }
  &__paragraph {
    width: 100%;
    color: $purple;
    font-size: 14px;
    font-family: $regular;
    line-height: 21px;
  }
  &__anchor {
    color: $light-purple;
    &:hover {
      color: $pink;
    }
  }

}
</style>
