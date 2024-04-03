<script setup lang="ts">
import { User } from "@/types/User";
import { useRoute } from "vue-router";
import { getCurrentUserId, isLoggedIn, isAdmin } from "@/services/Auth.service";
import { getAllTimePeriods } from "@/services/TimePeriod.service";
import { TimePeriod } from "@/types/TimePeriod";
import { clearCv, clearProfilePicture } from "@/services/User.service";

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

const timePeriods = await getAllTimePeriods();
const timePeriodsMap = timePeriods.reduce(
  (acc: { [key: number]: string }, timePeriod: TimePeriod) => {
    acc[timePeriod.id] = timePeriod.name;
    return acc;
  },
  {},
);
emit("loadUser", userId);

async function clearProfilePic() {
  await clearProfilePicture();
  window.location.reload();
}
async function clearResume() {
  await clearCv();
  window.location.reload();
}
</script>

<template>
  <div id="profile">
    <div class="page">
      <div class="top">
        <div class="main">
          <div class="photo">
            <img
              v-if="user.profile_picture_link"
              :src="user.profile_picture_link"
              alt="avatar"
            />
            <img v-else src="/blank_avatar.webp" alt="avatar" />
          </div>
          <div class="main-info">
            <div class="student-name">
              {{ user.first_name }} {{ user.last_name }}
            </div>
            <div class="student-year">{{ user.id }}</div>
            <div class="edit-profile" v-if="userId == currentUserId">
              <button
                v-if="user.id == currentUserId && user.profile_picture_link"
                @click="clearProfilePic"
              >
                Clear profile pic
              </button>
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
            <div class="linkedin-box" v-if="user.linkedin_link">
              <a :href="user.linkedin_link" class="button">
                <button class="icon-box" title="LinkedIn">
                  <img class="icon" src="/icon-linkedin.svg" alt="linkedin" />
                </button>
              </a>
            </div>
            <div class="github-box" v-if="user.github_link">
              <a :href="user.github_link" class="button">
                <button class="icon-box" title="GitHub">
                  <img class="icon" src="/icon-github.svg" alt="github" />
                </button>
              </a>
            </div>
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
                <span>Desired period:</span>
              </div>
              <div class="work-right">
                <span class="student-period">{{
                  timePeriodsMap[user.internship_time_period_id]
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="resume" v-if="user.cv_link">
        <h1>Resume</h1>
        <iframe :src="user.cv_link" width="100%" height="600px"></iframe>
        <button v-if="user.id == currentUserId" @click="clearResume">
          Delete resume
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/components/viewProfile/ViewProfile.css";
</style>
