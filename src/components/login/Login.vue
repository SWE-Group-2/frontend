<script lang="ts">
import { Ref, ref } from "vue";
import { loginUser } from "@/services/User.service";
import router from "@/router";
import { setAuthToken } from "@/services/Auth.service";
import { UserLoginInfo } from "@/types/UserLoginInfo";

// The state of the login page
export interface LoginPageState {
  // What user can change
  username: Ref<string>;
  password: Ref<string>;
  // Events that can occur
  submit: () => Promise<void>;
}

export function useLoginPage(): LoginPageState {
  const username = ref<string>("");
  const password = ref<string>("");

  // Parent component will handle the submission of the form
  async function submit() {
    const userLoginInfo: UserLoginInfo = {
      username: username.value,
      password: password.value,
    };
    const response = await loginUser(userLoginInfo);
    setAuthToken(response["access_token"]);
    await router.push("/internships");
  }

  return {
    username,
    password,
    submit,
  };
}
</script>
<script setup lang="ts">
import LoginView from "@/components/login/LoginView.vue";

const loginPage = useLoginPage();
</script>
<template>
  <LoginView
    v-model:username="loginPage.username.value"
    v-model:password="loginPage.password.value"
    @submit="loginPage.submit"
  ></LoginView>
</template>
