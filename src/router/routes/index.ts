import { RouteRecordRaw } from "vue-router";

import authRoutes from "./authRoutes";
import appRoutes from "./appRoutes";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/App.vue"),
    meta: {
      public: false,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
  ...authRoutes,
  ...appRoutes,
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () => import("../views/Login.vue"),
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   component: () => import("../views/Register.vue"),
  // },
  // {
  //   path: "/browse",
  //   component: RouterView,
  //   meta: { requiresAuth: true },
  //   children: [
  //     {
  //       path: "/profiles",
  //       name: "Profiles",
  //       component: () => import("../views/Profiles.vue"),
  //     },
  //     {
  //       path: "/home",
  //       name: "Home",
  //       component: () => import("../views/Home.vue"),
  //     },
  //     {
  //       path: "/search",
  //       name: "Search",
  //       component: () => import("../views/Search.vue"),
  //     },
  //     {
  //       path: "/my-list",
  //       name: "MyList",
  //       component: () => import("../views/MyList.vue"),
  //     },
  //   ],
  // },
];

export default routes;
