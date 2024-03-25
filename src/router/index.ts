import { createRouter, createWebHistory } from "vue-router";
import { isLoggedIn } from "@/services/Auth.service";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      component: () => import("../components/login/Login.vue"),
    },
    {
      path: "/register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/internships",
      component: () =>
        import("../components/internshipList/InternshipList.vue"),
    },
    {
      path: "/users",
      component: () => import("../components/studentList/StudentList.vue"),
    },
    {
      path: "/users/:userId",
      name: "viewProfile",
      component: () => import("../components/viewProfile/ViewProfile.vue"),
    },
    {
      path: "/internship/:internshipId",
      name: "viewInternship",
      component: () =>
        import("../components/viewInternship/ViewInternship.vue"),
    },
    {
      path: "/edit-internship/:internshipId",
      name: "editInternship",
      component: () =>
        import("../components/editInternship/EditInternship.vue"),
    },
    {
      path: "/create-internship",
      component: () =>
        import("../components/createInternship/CreateInternship.vue"),
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
