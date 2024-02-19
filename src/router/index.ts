import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import routes from "@/router/routes";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [...routes],
});

router.beforeEach((to, _, next) => {
  if (to.meta.public === false && !store.getters["auth/getToken"]) {
    return next({ name: "Auth" });
  }

  if (to.meta.public === true && store.getters["auth/getToken"]) {
    return next({ name: "Home" });
  }

  return next();
});

export default router;
