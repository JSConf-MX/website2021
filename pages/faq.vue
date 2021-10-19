<template>
    <div>
        <Header />
        <div class="grid grid__row">
            <right-menu/>
            <div class="grid__container">
              <div class="faq">
                <h2 class="faq__title">
                  {{ $t('faq.title') }}
                </h2>
              </div>
              <div class="faq__container">
                <h3 class="faq__subtitle">{{ $t('faq.question1') }}</h3>
                <p class="faq__content">
                  {{ $t('faq.answer1') }}
                  <a class="faq__link" href="https://docs.google.com/presentation/d/1n598TzJWZ4Rz2wXyU-TAAkuadRT3-LjP1vPhXYsrBMY/edit?usp=sharing" target="_blank">
                    {{ $t('faq.answer1Dot1') }}
                  </a>
                </p>
                <h3 class="faq__subtitle">{{ $t('faq.question2') }}</h3>
                <p class="faq__content">
                  {{ $t('faq.answer2') }}
                </p>
                <h3 class="faq__subtitle">{{ $t('faq.question3') }}</h3>
                <p class="faq__content">
                  {{ $t('faq.answer3') }}
                  <a class="faq__link" href="#" target="_blank">
                    {{ $t('faq.answer3Dot1') }}
                  </a>
                </p>
                 <h3 class="faq__subtitle">{{ $t('faq.question4') }}</h3>
                <p class="faq__content">
                  {{ $t('faq.answer4') }}
                </p>
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
import sideBar from '~/components/side-bar.vue'
export default {
  components: {
    Header,
    Footer,
    rightMenu,
    sideBar
  }
}
</script>

<style lang="scss" scoped>
.faq {
  background-image: url('../static/site/faq.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 272px;
  background-position: right;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  @include under($breakpoint-sm) {
    background-position: left;
  }
  &__title {
    font-size: 20px;
    color: $white;
    font-family: $pixeled;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: rgba($color: $dark-purple, $alpha: 0.4);
    padding: 0px 10px;
    @include under($breakpoint-sm) {
      background-color: rgba($color: $dark-purple, $alpha: 0.6);
      width: 100%;
    }
  }
  &__container {
    background-color: $white;
    padding: 30px 20px;
    margin-bottom: 15px;
  }
  &__content {
    color: $dark-purple;
    font-family: $regular;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 20px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  &__subtitle {
    color: $pink;
    font-family: $bold;
    font-size: 14px;
    margin-bottom: 5px;
  }
  &__link {
    text-decoration-color: $orange;
    color: $orange;
    &:hover {
      text-decoration-color: $pink;
      color: $pink;
    }
  }
}
</style>
