<template>
  <router-link :to="`/game/${gameId}`" class="game-card">
    <div class="game-card__banner">
      <img :src="getImgUrl()" class="game-card__banner__image" />
    </div>
    <div class="game-card__footer">
      <div class="game-card__footer__title">{{ title }}</div>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  gameId: {
    type: null,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
});

function getImgUrl() {
  return new URL(`../assets/gamesLogo/${props.image}`, import.meta.url).href;
}
</script>

<style scoped lang="scss">
.game-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #323232;
  border-radius: 6px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  color: unset;
  text-decoration: none;
  transition: 0.15s;

  &__banner {
    flex: 0 0 auto;
    width: 100%;
    aspect-ratio: 1/1;

    &__image {
      width: 100%;
      height: 100%;
    }
  }

  &__footer {
    flex: 0 0 auto;
    padding: 6px;
    background: #353535;

    &__title {
      font-weight: 400;
      font-family: "Oxanium", sans-serif;
    }
  }

  &:hover {
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.15);
  }
}
</style>
