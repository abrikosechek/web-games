<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <div class="layout">
    <Header />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
.layout {
  background: var(--bg);
  width: min(680px, 100%);
  min-height: 100dvh;
  margin: 0 auto;
  overflow: auto;
}

main {
  width: 100%;
  padding: 8px 16px;
}
</style>
