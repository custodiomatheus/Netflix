export default [
  {
    path: "/auth",
    name: "Auth",
    component: () => import("@/views/auth/index.vue"),
    redirect() {
      return { name: "AuthLogin" };
    },
    meta: {
      public: true,
    },
    children: [
      {
        path: "/login",
        name: "AuthLogin",
        component: () => import("@/views/auth/Login.vue"),
      },
      {
        path: "/register",
        name: "AuthRegister",
        component: () => import("@/views/auth/Register.vue"),
      },
    ],
  },
];
