<script lang="ts">
import { User } from "@/types/User";
import { ref, Ref } from "vue";
import { getUserById } from "@/services/User.service";
import router from "@/router";

export interface ViewProfileState {
  user: Ref<User>;
  loadUser: (userId: number) => Promise<void>;
}

export function useViewProfile(): ViewProfileState {
  const user = ref<User>({} as User);

  async function loadUser(userId: number) {
    try {
      user.value = await getUserById(userId);
    } catch (e) {
      console.error(e);
      await router.push("/users");
    }
  }

  return {
    user,
    loadUser,
  };
}
</script>

<script setup lang="ts">
import ViewProfileView from "@/components/viewProfile/ViewProfileView.vue";

const viewProfilePage = useViewProfile();
</script>

<template>
  <Suspense>
    <ViewProfileView
      v-model:user="viewProfilePage.user.value"
      @loadUser="viewProfilePage.loadUser"
    ></ViewProfileView>
  </Suspense>
</template>
