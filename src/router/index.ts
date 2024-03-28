import { createRouter, createWebHistory } from "vue-router";
import { isLoggedIn, isAdmin } from "@/services/Auth.service";

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
      component: () => import("../components/register/Register.vue"),
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
      // path: "/edit-profile/:userId",
      path: "/users/edit_profile",
      name: "editProfile",
      component: () => import("../components/editProfile/EditProfile.vue"),
    },
    {
      path: "/admin-dashboard",
      component: () =>
        import("../components/adminDashboard/AdminDashboard.vue"),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const publicPages = ["/", "/internships", "/login", "/register", "/students"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = isLoggedIn();
  const userIsAdmin = loggedIn ? await isAdmin() : false;

  if (authRequired && !loggedIn) {
    next("/login");
  } else if (to.path === "/admin-dashboard" && !userIsAdmin) {
    next("/internships");
  } else {
    next();
  }
});
export default router;
