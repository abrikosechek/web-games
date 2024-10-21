<template>
  <h1>Games list</h1>
  <div class="games-grid">
    <GameCard
      v-for="key in 1"
      :key="key"
      gameId="1"
      title="Tetris"
      image="Tetris.png"
    />
  </div>
</template>

<script setup>
import GameCard from "@/components/GameCard.vue";
</script>

<style scoped lang="scss">
h1 {
  font-size: 26px;
  font-weight: 400;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  margin-top: 6px;
}
</style>
