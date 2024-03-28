<script lang="ts">
import { Internship } from "@/types/Internship";
import { ref, Ref } from "vue";
import {
  deleteInternshipById,
  getInternshipById,
} from "@/services/Internship.service";
import router from "@/router";
import { getUserById, roleNameFromId } from "@/services/User.service";

export interface ViewInternshipState {
  internship: Ref<Internship>;
  authorUsername: Ref<string>;
  authorRole: Ref<string>;
  loadInternship: (internshipId: number) => Promise<void>;
  deleteInternship: (internshipId: number) => Promise<void>;
}

export function useViewInternship(): ViewInternshipState {
  const internship = ref<Internship>({} as Internship);
  const authorUsername = ref("");
  const authorRole = ref("");

  async function loadInternship(internshipId: number) {
    try {
      internship.value = await getInternshipById(internshipId);
      const authorId = internship.value.author_id;
      const author = await getUserById(authorId);
      authorUsername.value = author.username;
      authorRole.value = await roleNameFromId(author.role_id);
    } catch (e) {
      console.error(e);
      await router.push("/internships");
    }
  }

  async function deleteInternship(internshipId: number) {
    await deleteInternshipById(internshipId);
    await router.push("/internships");
  }

  return {
    internship,
    authorRole,
    authorUsername,
    loadInternship,
    deleteInternship,
  };
}
</script>
<script setup lang="ts">
import ViewInternshipView from "@/components/viewInternship/ViewInternshipView.vue";

const viewInternshipPage = useViewInternship();
</script>
<template>
  <Suspense>
    <ViewInternshipView
      v-model:internship="viewInternshipPage.internship.value"
      v-model:author-username="viewInternshipPage.authorUsername"
      v-model:author-role="viewInternshipPage.authorRole"
      @loadInternship="viewInternshipPage.loadInternship"
      @deleteInternship="viewInternshipPage.deleteInternship"
    ></ViewInternshipView>
  </Suspense>
</template>
