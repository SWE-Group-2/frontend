<script lang="ts">
import { Ref, ref } from "vue";
import { registerUser } from "@/services/User.service";
import router from "@/router";

// The state of the register page
export interface RegisterPageState {
  first_name: Ref<string>;
  last_name: Ref<string>;
  username: Ref<string>;
  password: Ref<string>;
  confirm_password: Ref<string>;
  submit: () => Promise<void>;
}

export function useRegisterPage(): RegisterPageState {
  const first_name = ref<string>("");
  const last_name = ref<string>("");
  const username = ref<string>("");
  const password = ref<string>("");
  const confirm_password = ref<string>("");

  // Parent component will handle the submission of the form
  async function submit() {
    if (password.value !== confirm_password.value) {
      // console.error("Passwords do not match");
      alert("Passwords do not match");
      return;
    }

    const UserRegistrationInfo = {
      first_name: first_name.value,
      last_name: last_name.value,
      username: username.value,
      password: password.value,
    };
    await registerUser(UserRegistrationInfo);
    await router.push("/login");
  }

  return {
    first_name,
    last_name,
    username,
    password,
    confirm_password,
    submit,
  };
}
</script>
<script setup lang="ts">
import RegisterView from "@/components/register/RegisterView.vue";

const registerPage = useRegisterPage();
</script>
<template>
  <RegisterView
    v-model:first_name="registerPage.first_name.value"
    v-model:last_name="registerPage.last_name.value"
    v-model:username="registerPage.username.value"
    v-model:password="registerPage.password.value"
    v-model:confirm_password="registerPage.confirm_password.value"
    @submit="registerPage.submit"
  ></RegisterView>
</template>
