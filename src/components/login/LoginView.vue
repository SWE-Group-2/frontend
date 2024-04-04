<script setup lang="ts">
// The state of the login page
import { GoogleLogin } from "vue3-google-login";
import { useLoginPage } from "./Login.vue";

defineProps<{
  username: string;
  password: string;
}>();

// Events that can occur on login, i.e., submission of the form
// No methods here but rather the view informs parent component of an event occurring
const emit = defineEmits<{
  (e: "submit"): void;
  (e: "loginWithGoogle", response: object): void;
  (e: "update:username", value: string): void;
  (e: "update:password", value: string): void;
}>();

function callback(response: object) {
  emit("loginWithGoogle", response);
}
</script>
<template>
  <div class="item-center">
    <div class="login-box align-center">
      <h1 class="h1-text">LOGIN</h1>
      <form @submit.prevent="$emit('submit')">
        <div class="input-group">
          <input
            id="username"
            :value="username"
            @input="$emit('update:username', $event.target.value)"
            class="input-text"
            type="text"
            placeholder="username"
            required
          />
        </div>
        <div class="input-group">
          <input
            id="password"
            :value="password"
            @input="$emit('update:password', $event.target.value)"
            class="input-text"
            type="password"
            placeholder="password"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div class="google-login">
        <GoogleLogin :callback="callback" />
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "@/components/login/Login.css";
</style>
