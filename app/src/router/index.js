import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "main",
    path: "/",
    component: () => import("@/pages/Main.vue"),
  },
  {
    name: "game",
    path: "/game/:gameId",
    component: () => import("@/pages/Game.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "router-link-active",
  linkExactActiveClass: "router-link-exact-active",
});

export default router;
