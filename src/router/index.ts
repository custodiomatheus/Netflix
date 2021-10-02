import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouterView,
} from "vue-router";

import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/browse",
    component: RouterView,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/profiles",
        name: "Profiles",
        component: () => import("../views/Profiles.vue"),
      },
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/search",
        name: "Search",
        component: () => import("../views/Search.vue"),
      },
      {
        path: "/my-list",
        name: "MyList",
        component: () => import("../views/MyList.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters["account/getToken"]) {
    next({
      path: "/",
    });
  } else {
    next();
  }
});

export default router;
