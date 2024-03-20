<script setup>
import PostsDisplay from "@/components/PostsDisplay.vue";
</script>

<template>
  <div id="profile">
    <div class="page">
      <div class="top">
        <div class="main">
          <div class="photo">
            <img src="/piti.webp" alt="piti" />
          </div>
          <div class="main-info">
            <span class="student-name">Piti Ongmongkolkul</span>
            <span class="student-year">60xxxxx</span>
            <div class="edit-profile">
              <RouterLink
                style="text-decoration: underline; color: inherit"
                to="/edit_profile"
                >EDIT PROFILE
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="contacts">
          <div class="contacts-left">
            <a href="https://linkedin.com" class="button">
              <img src="/icon-linkedin.svg" alt="github" />
            </a>
            <a href="https://github.com" class="button">
              <img src="/icon-github.svg" alt="github" />
            </a>
          </div>
          <div class="contacts-right">
            <span class="student-email">pitipitipitipiti@ongmongkolkul</span>
            <span class="student-phone">+66 000 000 0000</span>
          </div>
        </div>
      </div>
      <div class="profile-body">
        <div class="mid">
          <div class="about">
            <div class="about-top">
              <h1>ABOUT</h1>
              <h1 class="student-gpa">GPA: 3.69</h1>
            </div>
            <span class="student-bio">
              This is a bio This is a bio This is a bio This is a bio This is a
              bio This is a bio This is a bio This is a bio This is a bio This
              is a bio This is a bio This is a bio This is a bio This is a bio
              This is a bio This is a bio This is a bio This hah you won't see
              this
            </span>
          </div>
          <div class="work">
            <h1>WORK</h1>
            <div class="work-info">
              <div class="work-left">
                <span>Desired positions:</span>
                <span>Desired period:</span>
              </div>
              <div class="work-right">
                <span class="student-positions">CEO</span>
                <span class="student-period">S + T1/25</span>
              </div>
            </div>
          </div>
        </div>
        <div class="posts">
          <h1>POSTS</h1>
          <div class="profile-posts">
            <PostsDisplay />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  margin-left: 50px;
  margin-right: 50px;
}
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
  margin-top: 90px;
}
.main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.main-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 507px;
  margin-left: 200px;
  // 30px if no photo
  gap: 0.3rem;
}
.contacts {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #000000;
}
.contacts-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
  gap: 1rem;
}
.contacts-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  width: 310px;
  padding-right: 10px;
}

.profile-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  gap: 3rem;
}
.mid {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3rem;
}
.about {
  --shadow-color: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.418);
  padding: 1.5rem;
  max-width: 650px;
}
.about-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 300px;
}

.work {
  --shadow-color: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.418);
  padding: 1.5rem;
}
.work-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 470px;
}
.work-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.work-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
}

.posts {
  --shadow-color: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.418);
  padding: 1.5rem;
}

.student-name {
  color: white;
  display: inline;
  background-color: #462378;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  width: fit-content;
  font-weight: 600;
  font-size: 25px;
}
.student-year {
  color: white;
  display: inline;
  background-color: #dd9832;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  width: fit-content;
  font-weight: 500;
  font-size: 24px;
}
.student-gpa {
  color: #462378;
  font-family:
    Roboto Mono,
    monospace;
  font-weight: 500;
  letter-spacing: 0em;
  line-height: 0;
  margin-bottom: 30px;
}
.student-bio {
  max-height: 85px;
  overflow: hidden;
}
.student-positions {
  color: #dd9832;
}
h1 {
  font-family: Roboto Slab;
  font-weight: 700;
  font-size: 25px;
  letter-spacing: 0em;
  line-height: 0;
  margin-bottom: 30px;
}

.photo {
  position: absolute;
  margin-left: 30px;
  margin-top: -30px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.button {
  display: inline-block;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}
.button img {
  width: 60%;
  height: auto;
  object-fit: cover;
}
.edit-profile {
  position: absolute;
  font-size: 15px;
  color: #462378;
  margin-top: 100px;
}
.profile-posts {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-top: 40px;
}
</style>
