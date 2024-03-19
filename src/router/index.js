import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/internships",
      component: () => import("../views/InternshipListView.vue"),
    },
    {
      path: "/students",
      component: () => import("../views/StudentsListView.vue"),
    },
  ],
});

export default router;
