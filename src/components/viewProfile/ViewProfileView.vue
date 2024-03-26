<script setup lang="ts">
import { User } from "@/types/User";
import { useRoute } from "vue-router";
import { getCurrentUserId } from "@/services/Auth.service";

defineProps<{
  user: User;
}>();
const emit = defineEmits<{
  (e: "loadUser", value: number): void;
}>();
const route = useRoute();
const userId = Number(route.params.userId);
const currentUserId = await getCurrentUserId();
emit("loadUser", userId);
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
