<template>
  <div class="splash">
    <Header />
    <div class="splash__container">
      <Alert />
      <img class="splash__background" src="/background.png" alt="windows and cheems background">
      <div class="splash__menu">
        <div class="splash__icons">
          <a class="splash__icon-container" href="#">
            <img class="splash__icon" src="/icons/sponsors.svg" alt="sponsors icon">
            <div class="splash__icon-box">
              <span class="splash__icon-name">Patrocinadores</span>
            </div>
          </a>
          <a class="splash__icon-container" href="#">
            <img class="splash__icon" src="/icons/cfp.svg" alt="call for proposals icon">
            <div class="splash__icon-box">
              <span class="splash__icon-name">CFP</span>
            </div>
          </a>
          <a class="splash__icon-container" href="#">
            <img class="splash__icon" src="/icons/attendees.svg" alt="attendees icon">
            <div class="splash__icon-box">
              <span class="splash__icon-name">Asistentes-2020</span>
            </div>
          </a>
        </div>
        <div class="splash__trash">
          <a class="splash__icon-container" href="#">
            <img class="splash__icon splash__icon-trash" src="/icons/trash.svg" alt="trash icon">
            <div class="splash__icon-box">
              <span class="splash__icon-name">Papelera</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.splash {
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  flex-direction: column;
  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  &__background {
    width: 100%;
    z-index: 0;
    height: 89vh;
  }
  &__menu {
    display: flex;
    flex-direction: column;
    width: 40%;
    max-width: 376px;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 3;
    padding-right: 20px;
    @include under(sm) {
      width: 60%;
    }
    @include under(menu) {
      width: 100%;
      padding-left: 20px;
      left: 0;
      right: 0;
      width: 100%;
      margin: 0 auto;
    }
  }
  &__trash {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
  }
  &__icons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  &__icon {
    width: 100%;
    max-width: 80px;
    &-trash {
      margin-bottom: 10px;
      max-width: 70px;
    }
    &-container {
      text-decoration: none;
      width: calc((100% / 2) - 10px);
      margin-bottom: 30px;
      min-height: 93px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
    &-name {
      font-family: $regular;
      font-size: 14px;
      color: $dark-purple;
    }
    &-box {
      width: 100%;
      border: 1px solid $dark-purple;
      box-shadow: 10px 8px 1px 0px rgb(0 0 0 / 10%);
      background-color: white;
    }
  }
}
</style>
