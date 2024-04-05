<script lang="ts">
import { Ref, ref } from "vue";
import { loginUser, loginUserWithGoogle } from "@/services/User.service";
import router from "@/router";
import { setAuthToken } from "@/services/Auth.service";
import { UserLoginInfo } from "@/types/UserLoginInfo";
import { decodeCredential } from "vue3-google-login";

// The state of the login page
export interface LoginPageState {
  // What user can change
  username: Ref<string>;
  password: Ref<string>;
  // Events that can occur
  submit: () => Promise<void>;
  loginWithGoogle: (response: object) => Promise<void>;
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
    try {
      const response = await loginUser(userLoginInfo);
      setAuthToken(response["access_token"]);
      await router.push("/internships");
    } catch (error) {
      console.error(error);
    }
  }

  async function loginWithGoogle(response: object) {
    const userData = decodeCredential(response["credential"]);
    const userInfo = {
      first_name: userData["given_name"],
      last_name: userData["family_name"],
      username: userData["email"],
      password: userData["sub"],
    };
    const resp = await loginUserWithGoogle(userInfo);
    setAuthToken(resp["access_token"]);
    await router.push("/internships");
  }

  return {
    username,
    password,
    submit,
    loginWithGoogle,
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
    @login-with-google="loginPage.loginWithGoogle"
  ></LoginView>
</template>
