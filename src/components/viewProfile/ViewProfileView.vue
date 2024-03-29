<script setup lang="ts">
import { User } from "@/types/User";
import { useRoute } from "vue-router";
import { getCurrentUserId, isLoggedIn, isAdmin } from "@/services/Auth.service";

defineProps<{
  user: User;
}>();
const emit = defineEmits<{
  (e: "loadUser", value: number): void;
  (e: "deleteUser", value: number): void;
}>();
const route = useRoute();
const userId = Number(route.params.userId);
const currentUserId = await getCurrentUserId();
const loggedIn = isLoggedIn();
const userIsAdmin = loggedIn ? await isAdmin() : false;
emit("loadUser", userId);
</script>

<template>
  <div id="profile">
    <div class="page">
      <div class="top">
        <div class="main">
          <div class="photo">
            <img src="/blank_avatar.webp" alt="avatar" />
          </div>
          <div class="main-info">
            <div class="student-name">
              {{ user.first_name }} {{ user.last_name }}
            </div>
            <div class="student-year">{{ user.id }}</div>
            <div class="edit-profile" v-if="userId == currentUserId">
              <RouterLink
                style="text-decoration: underline; color: inherit"
                :to="{
                  name: 'editProfile',
                  params: { userId: user.id },
                }"
                >EDIT PROFILE
              </RouterLink>
            </div>
            <button
              class="delete-profile"
              title="Delete profile"
              v-if="userIsAdmin"
              @click="$emit('deleteUser', user.id)"
            >
              DELETE PROFILE
            </button>
          </div>
        </div>
        <div class="contacts">
          <div class="contacts-left">
            <a href="https://linkedin.com" class="button">
              <button class="icon-box" title="LinkedIn">
                <img class="icon" src="/icon-linkedin.svg" alt="linkedin" />
              </button>
            </a>
            <a href="https://github.com" class="button">
              <button class="icon-box" title="GitHub">
                <img class="icon" src="/icon-github.svg" alt="github" />
              </button>
            </a>
          </div>
          <div class="contacts-right">
            <div class="student-email">{{ user.email }}</div>
            <div class="student-phone">{{ user.phone_number }}</div>
          </div>
        </div>
      </div>
      <div class="profile-body">
        <div class="mid">
          <div class="about">
            <div class="about-top">
              <h1>ABOUT</h1>
              <h1 class="student-gpa">GPA: {{ user.gpa }}</h1>
            </div>
            <span class="student-bio">{{ user.description }}</span>
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
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/components/viewProfile/ViewProfile.css";
</style>
