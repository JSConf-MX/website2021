<template>
    <div class="grid__container-side">
        <follow-us/>
        <important-links/>
    </div>
</template>

<script>
import followUs from '~/components/follow-us.vue'
import importantLinks from '~/components/important-links.vue'
export default {
  components: {
    followUs,
    importantLinks
  }
}
</script>

<style lang="scss" scoped>
.follow {
    &__container {
        background-color: $white;
        border-radius: 3px;
        padding: 15px 20px 0px;
        position: relative;
    }
    &__title {
        font-family: $pixeled;
        font-size: 14px;
        color: $pink;
        letter-spacing: 1px;
        margin-bottom: 30px;
    }
    &__img {
        width: 100%;
        margin-left: -25px;
        margin-top: 30px;
    }
    &__email {
        background-color: $medium-purple;
        border-radius: 5px;
        border-top-right-radius: 0px;
        text-align: center;
        width: 100%;
        max-width: 80%;
        position: absolute;
        bottom: -9px;
        left: 0;
        right: 0;
        margin-left: auto;
        padding: 7px;
        &-link {
            color: $white;
            text-decoration: none;
            font-family: $regular;
            font-size: 16px;
        }
    }
    &__social {
        position: absolute;
        top: 23%;
        right: 20px;
        background-color: rgba(255,255,255,0.5);
        &-link {
            font-family: $regular;
            font-size: 14px;
            color: $gray;
            text-decoration: none;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
            &:hover {
                text-decoration: underline;
            }
        }
        &-icon {
            width: 22px;
            margin-right: 10px;
            &--small {
                width: 11px;
            }
        }
    }
}
</style>