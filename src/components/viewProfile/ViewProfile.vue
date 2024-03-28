<script lang="ts">
import { User } from "@/types/User";
import { ref, Ref } from "vue";
import { getUserById } from "@/services/User.service";
import router from "@/router";
import { deleteUserById } from "@/services/AdminService";

export interface ViewProfileState {
  user: Ref<User>;
  loadUser: (userId: number) => Promise<void>;
  deleteUser: (userId: number) => Promise<void>;
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

  async function deleteUser(userId: number) {
    await deleteUserById(userId);
    await router.push("/users");
  }

  return {
    user,
    loadUser,
    deleteUser,
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
      @deleteUser="viewProfilePage.deleteUser"
    ></ViewProfileView>
  </Suspense>
</template>
