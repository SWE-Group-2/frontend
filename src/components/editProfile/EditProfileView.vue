<script setup lang="ts">
import { getValidTimePeriods } from "@/services/TimePeriod.service";
import { TimePeriod } from "@/types/TimePeriod";
import { useRoute } from "vue-router";

defineProps<{
  username: string | null;
  first_name: string | null;
  last_name: string | null;
  gpa: number | null;
  academic_year: string | null;
  email: string | null;
  phone_number: string | null;
  description: string | null;
  github_link: string | null;
  linkedin_link: string | null;
  website_link: string | null;
  internship_time_period_id: number | null;
  profile_picture_link: string | null;
  uploadedProfilePic: File | null;
  uploadedCv: File | null;
}>();

const emit = defineEmits<{
  (e: "update:first_name", value: string | null): void;
  (e: "update:last_name", value: string | null): void;
  (e: "update:gpa", value: number | null): void;
  (e: "update:academic_year", value: string | null): void;
  (e: "update:email", value: string | null): void;
  (e: "update:phone_number", value: string | null): void;
  (e: "update:description", value: string | null): void;
  (e: "update:github_link", value: string | null): void;
  (e: "update:linkedin_link", value: string | null): void;
  (e: "update:website_link", value: string | null): void;
  (e: "update:internship_time_period_id", value: number | null): void;
  (e: "update:profile_picture_link", value: string | null): void;
  (e: "update:uploadedProfilePic", value: File | null): void;
  (e: "update:uploadedCv", value: File | null): void;
  (e: "edit", value: number): void;
  (e: "loadUser", value: number): void;
}>();
const timePeriodOptions: TimePeriod[] = await getValidTimePeriods();
const route = useRoute();
const userId = Number(route.params.userId);
emit("loadUser", userId);
const roles = ["Freshmen", "Sophomore", "Junior", "Senior"];
</script>

<style scoped>
@import "@/components/editProfile/EditProfile.css";
</style>

<template>
  <div id="edit-profile">
    <div class="top">
      <h1>Edit Profile</h1>
      <span class="student-name">{{ username }}</span>
    </div>

    <div class="mid">
      <form @submit.prevent="$emit('edit', userId)">
        <div class="about">
          <span class="edit-header">About</span>
          <div class="input-field">
            <input
              id="first-name-input"
              :value="first_name"
              @input="$emit('update:first_name', $event.target.value)"
              type="text"
              spellcheck="false"
            />
            <label for="description-input">First Name</label>
          </div>
          <div class="input-field">
            <input
              id="last-name-input"
              :value="last_name"
              @input="$emit('update:last_name', $event.target.value)"
              type="text"
              spellcheck="false"
            />
            <label for="description-input">Last Name</label>
          </div>
          <div class="input-field">
            <input
              id="description-input"
              :value="description"
              @input="$emit('update:description', $event.target.value)"
              type="text"
              spellcheck="false"
            />
            <label for="description-input">Description</label>
          </div>
          <div class="input-field">
            <select
              id="academic-year-input"
              :value="academic_year"
              @change="$emit('update:academic_year', $event.target.value)"
            >
              <option v-for="role in roles" :value="role">
                {{ role }}
              </option>
            </select>
            <label for="academic-year-input">Academic Year</label>
          </div>
          <div class="input-field-gpa">
            <input
              id="gpa-input"
              :value="gpa"
              @input="$emit('update:gpa', $event.target.value)"
              type="text"
              spellcheck="false"
            />
            <label for="gpa-input">GPA</label>
          </div>
          <span class="edit-header">Update Photo</span>
          <input
            id="profile-picture-input"
            accept="image/png,image/jpeg,image/jpg,image/gif"
            type="file"
            @change="$emit('update:uploadedProfilePic', $event.target.files[0])"
          />
          <span class="edit-header">Update CV</span>
          <input
            id="cv-input"
            accept="application/pdf"
            type="file"
            @change="$emit('update:uploadedCv', $event.target.files[0])"
          />
        </div>
        <div class="extra">
          <span class="edit-header">Public Contact Information</span>
          <div class="input-field">
            <input
              id="email-input"
              :value="email"
              @input="$emit('update:email', $event.target.value)"
              type="text"
              spellcheck="false"
            />
            <label for="email-input">E-mail Address</label>
          </div>
          <div class="input-field">
            <input
              id="phone-input"
              :value="phone_number"
              @input="$emit('update:phone_number', $event.target.value)"
              type="text"
              spellcheck="false"
            />
            <label for="phone-input">Phone Number</label>
          </div>
          <div class="input-field">
            <input
              id="website-input"
              :value="website_link"
              @input="$emit('update:website_link', $event.target.value)"
              type="text"
              spellcheck="false"
            />
            <label for="website-input">Website Link</label>
          </div>
          <div class="input-field">
            <input
              id="linkedin-input"
              :value="linkedin_link"
              @input="$emit('update:linkedin_link', $event.target.value)"
              type="text"
              spellcheck="false"
            />
            <label for="linkedin-input">LinkedIn Link</label>
          </div>
          <div class="input-field">
            <input
              id="github-input"
              :value="github_link"
              @input="$emit('update:github_link', $event.target.value)"
              type="text"
              spellcheck="false"
            />
            <label for="github-input">GitHub Link</label>
          </div>
          <span class="edit-header">Work Information</span>
          <div class="input-field">
            <select
              id="time-period-input"
              :value="internship_time_period_id"
              @change="
                $emit('update:internship_time_period_id', $event.target.value)
              "
            >
              <option v-for="option in timePeriodOptions" :value="option.id">
                {{ option.name }}
              </option>
            </select>
            <label for="time-period-input">Desired Period</label>
          </div>
        </div>
        <div class="alignment">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
