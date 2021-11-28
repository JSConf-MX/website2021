<template>
    <div id="team">
        <div class="team__header">
        <span class="team__title"> {{ $t('team.title') }}</span>
        </div>
        <div class="team__container">
            <a
                href="https://twitter.com/tuxxy"
                target="_blank"
                rel="noopener noreferrer"
                class="team__col-1-3"
            >
                <img class="team__photo" src="/site/team/yuli-01.png" alt="Yuliana Reyna Jiménez">
            </a>
            <a
                href="https://www.linkedin.com/in/hector-santaella-marin/"
                target="_blank"
                rel="noopener noreferrer"
                class="team__col-1-3"
            >
                <img class="team__photo" src="/site/team/hector-01.png" alt="Héctor Santaella">
            </a>
            <a
                href="https://www.linkedin.com/in/floribg/"
                target="_blank"
                rel="noopener noreferrer"
                class="team__col-1-3"
            >
                <img class="team__photo" src="/site/team/flor-01.png" alt="Flor Ivonne Baños Gaspar">
            </a>
            <a
                href="https://twitter.com/FerchoGlezV1"
                target="_blank"
                rel="noopener noreferrer"
                class="team__col-1-3"
            >
                <img class="team__photo" src="/site/team/fer-01.png" alt="Fernando González">
            </a>
            <a
                href="https://twitter.com/rodikana"
                target="_blank"
                rel="noopener noreferrer"
                class="team__col-1-3"
            >
                <img class="team__photo" src="/site/team/rodrigo-01.png" alt="Joaquin Rodrigo Quezada Hernández">
            </a>
            <a
                href="https://twitter.com/lasr21"
                target="_blank"
                rel="noopener noreferrer"
                class="team__col-1-3"
            >
                <img class="team__photo" src="/site/team/luis-01.png" alt="Luis Sánchez Romero">
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#team {
    margin-bottom: 30px;
}
.team {
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
  &__col {
      &-1 {
        &-3 {
            width: calc((100% / 3) - 10px);
            @include under($breakpoint-menu) {
                width: calc((100% / 2) - 10px);
            }
        }
      }
  }
  &__photo {
    width: 100%;
  }
}
</style>
