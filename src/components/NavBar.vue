<template>
  <div class="navbar">
    <nav class="navbar-menu">
      <div class="navbar-menu-left">
        <img class="menu-logo" alt="logo" src="/logo_muic.png" />
        <span class="menu-item">Internships</span>
        <span class="menu-item">Students</span>
      </div>
      <div class="navbar-menu-right">
        <span class="dropdown">
          Account &#9662;
          <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-style">
            <li class="dropdown_item">Login</li>
            <li class="dropdown_item">Register</li>
            <li class="dropdown_item">Logout</li>
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
    margin-left: 30px;
    margin-right: 50px;
    width: 160px;
    color: #dd9832;
  }
  .menu-item {
    margin: 40px;
    color: #b5a7c8;
  }
  .menu-item a {
    text-decoration: none;
    color: #b5a7c8;
  }
  .menu-item a:visited {
    color: #b5a7c8;
  }

  .menu-item:hover {
    color: #dd9832;
    cursor: pointer;
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
  &:hover {
    color: #dd9832;
    cursor: pointer;
  }
}
.dropdown_menu {
  position: absolute;
  margin-top: 15px;
  margin-left: -10px;
  z-index: -1;
  background-color: #7f53bf;
  width: 50px;
  li {
    display: none;
    color: white;
    margin-left: -40px;
    padding: 10px;
    font-size: 13px;
    opacity: 0;
    &:hover {
      color: #dd9832;
      cursor: pointer;
    }
  }
}
.dropdown:hover .dropdown_menu--animated {
  display: block;
}
.dropdown_menu--animated {
  display: none;
  li {
    display: block;
    opacity: 1;
  }
}
.dropdown_menu-style {
  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;
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
