<template>
  <div class="header">
    <router-link to="/" class="header__logo">WebGames</router-link>
    <a
      href="https://github.com/abrikosechek/web-games"
      target="_blank"
      class="header__icon"
    >
      <IconGithubWhite />
    </a>
  </div>
</template>

<script setup>
import { IconGithubWhite } from "@icons";
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 16px;
  height: 45px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.15);

  &__logo {
    font-size: 18px;
    font-weight: 500;
    color: white;
    text-decoration: none;
    line-height: 1em;
  }

  &__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;

    & > * {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
