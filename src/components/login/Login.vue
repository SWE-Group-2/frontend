<script lang="ts">
import { Ref, ref } from "vue";
import { loginUser } from "@/services/User.service";
import router from "@/router";
import { setAuthToken } from "@/services/Auth.service";

// The state of the login page
export interface LoginPageState {
  username: Ref<string>;
  password: Ref<string>;
  submit: () => Promise<void>;
}

export function useLoginPage(): LoginPageState {
  const username = ref<string>("");
  const password = ref<string>("");

  // Parent component will handle the submission of the form
  async function submit() {
    const userLoginInfo = {
      username: username.value,
      password: password.value,
    };
    const response = await loginUser(userLoginInfo);
    if (response.status === 200) {
      setAuthToken(response["access_token"]);
      await router.push("/internships");
    }
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
