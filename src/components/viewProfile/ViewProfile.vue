<script lang="ts">
import { User } from "@/types/User";
import { Internship } from "@/types/Internship";
import { ref, Ref } from "vue";
import { getUserById } from "@/services/User.service";
import router from "@/router";
import { deleteUserById } from "@/services/AdminService";
import { getInternshipByAuthorId } from "@/services/Internship.service";

export interface ViewProfileState {
  user: Ref<User>;
  internships: Ref<Internship[]>;
  loadUser: (userId: number) => Promise<void>;
  deleteUser: (userId: number) => Promise<void>;
  loadInternships: (userId: number) => Promise<void>;
}

export function useViewProfile(): ViewProfileState {
  const user = ref<User>({} as User);
  const internships = ref<Internship[]>([]);

  async function loadUser(userId: number) {
    try {
      user.value = await getUserById(userId);
      internships.value = await getInternshipByAuthorId(userId);
    } catch (e) {
      console.error(e);
      await router.push("/users");
    }
  }

  async function deleteUser(userId: number) {
    await deleteUserById(userId);
    await router.push("/users");
  }

  async function loadInternships(userId: number) {
    internships.value = await getInternshipByAuthorId(userId);
    console.log(
      internships.value.forEach((internship) => console.log(internship)),
    );
  }

  return {
    user,
    loadUser,
    deleteUser,
    internships,
    loadInternships,
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
      v-model:internships="viewProfilePage.internships.value"
      @loadUser="viewProfilePage.loadUser"
      @deleteUser="viewProfilePage.deleteUser"
      @loadInternships="viewProfilePage.loadInternships"
    ></ViewProfileView>
  </Suspense>
</template>
