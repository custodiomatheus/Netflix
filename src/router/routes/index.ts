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
];

export default routes;
