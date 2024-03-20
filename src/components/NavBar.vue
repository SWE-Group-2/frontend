<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="navbar">
    <nav class="navbar-menu">
      <div class="navbar-menu-left">
        <RouterLink to="/">
          <img class="menu-logo" alt="logo" src="/logo_muic.png" />
        </RouterLink>
        <span
          class="menu-item"
          :class="{ 'current-page': $route.path === '/internships' }"
        >
          <RouterLink
            style="text-decoration: none; color: inherit"
            to="/internships"
          >
            Internships
          </RouterLink>
        </span>
        <span
          class="menu-item"
          :class="{ 'current-page': $route.path === '/students' }"
        >
          <RouterLink
            style="text-decoration: none; color: inherit"
            to="/students"
          >
            Students
          </RouterLink>
        </span>
      </div>
      <div class="navbar-menu-right">
        <span
          class="dropdown"
          :class="{ 'current-page-normal': $route.path === '/profile' }"
        >
          <RouterLink
            style="text-decoration: none; color: inherit"
            to="/profile"
          >
            Account &#9662;
          </RouterLink>
          <ul class="dropdown-menu dropdown-menu--animated dropdown-menu-style">
            <li class="dropdown-item">
              <RouterLink
                style="text-decoration: none; color: inherit"
                to="/login"
                >Login</RouterLink
              >
            </li>
            <li class="dropdown-item">
              <RouterLink
                style="text-decoration: none; color: inherit"
                to="/register"
                >Register</RouterLink
              >
            </li>
            <li class="dropdown-item">
              Logout
              <!-- some technical code to log user out -->
            </li>
          </ul>
        </span>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  background-color: #462378;
}
.navbar-menu {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  height: 30px;
  font-size: 15px;
  font-weight: 500;
  .menu-logo {
    margin-top: 5px;
    margin-left: 30px;
    margin-right: 50px;
    width: 160px;
    color: #dd9832;
  }
  .menu-item {
    margin: 40px;
    display: inline-block;
    position: relative;
    color: #b5a7c8;
    transition: color 0.25s ease-in-out;
  }
  .menu-item::after {
    content: "";
    position: absolute;
    margin-bottom: -5px;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #dd9832;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  .menu-item:hover,
  .current-page {
    color: #dd9832;
    cursor: pointer;
    transition: color 0.25s ease-in-out;
  }
  .menu-item:hover::after,
  .current-page::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
}
.navbar-menu-left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar-menu-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropdown {
  margin-right: 30px;
  z-index: 100;
  color: #b5a7c8;
  padding: 34px 0;
  transition: color 0.15s ease-in-out;
  &:hover {
    color: #dd9832;
    cursor: pointer;
    transition: color 0.15s ease-in-out;
  }
}
.dropdown-menu {
  position: absolute;
  margin-top: 15px;
  margin-left: -10px;
  z-index: -1;
  background-color: #7f53bf;
  width: 50px;
  li {
    display: none;
    margin-left: -40px;
    padding: 10px;
    font-size: 13px;
    opacity: 0;
    color: white;
    transition: color 0.25s ease-in-out;
    &:hover {
      color: #dd9832;
      cursor: pointer;
    }
  }
}
.dropdown:hover .dropdown-menu--animated {
  display: block;
}
.dropdown-menu--animated {
  display: none;
  li {
    display: block;
    opacity: 1;
  }
}
.dropdown-menu-style {
  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;
}

.current-page-normal {
  color: #dd9832;
}

@keyframes growDown {
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
