export default [
  {
    path: "/",
    name: "App",
    component: () => import("@/views/app/index.vue"),
    redirect() {
      return { name: "Home" };
    },
    meta: {
      public: false,
    },
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/app/Home.vue"),
      },
    ],
  },
];
