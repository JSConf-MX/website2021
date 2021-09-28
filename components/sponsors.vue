<template>
    <div id="sponsors">
        <div class="sponsors__header">
        <span class="sponsors__title">Sponsors</span>
        </div>
        <div class="sponsors__container">
            <div class="sponsors__paragraph">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            </div>
            <div class="sponsors__photo">
                <img class="sponsors__decoration" src="/site/sponsors.png" alt="">
                <img class="sponsors__photo-img" src="/site/community.png" alt="Mexican tech community">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#sponsors {
    margin-bottom: 30px;
}
.sponsors {
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
    background-color: $light-purple;
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
    &-img {
      width: 100%;
    }
  }
  &__paragraph {
    width: calc(50% - 20px);
    color: $purple;
    font-size: 14px;
    font-family: $regular;
  }
  &__decoration {
    width: 100%;
    position: absolute;
    top: -20%;
    left: -10%;
    max-width: 80px;
  }
}
</style>
