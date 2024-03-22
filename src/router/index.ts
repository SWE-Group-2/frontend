import { createRouter, createWebHistory } from "vue-router";
import { isLoggedIn } from "@/services/AuthService.spec";

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
    {
      path: "/profile",
      component: () => import("../views/StudentProfileView.vue"),
    },
    {
      path: "/edit-internship",
      component: () => import("../views/EditPostView.vue"),
    },
    {
      path: "/edit-profile",
      component: () => import("../views/EditProfileView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/", "/internships", "/login", "/register", "/students"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = isLoggedIn();

  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});
export default router;
