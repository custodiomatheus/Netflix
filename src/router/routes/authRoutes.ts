export default [
  {
    path: "/auth",
    name: "Auth",
    component: () => import("@/views/auth/index.vue"),
    redirect() {
      return { name: "Login" };
    },
    meta: {
      public: true,
    },
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/auth/Login.vue"),
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("@/views/auth/Register.vue"),
      },
    ],
  },
];
