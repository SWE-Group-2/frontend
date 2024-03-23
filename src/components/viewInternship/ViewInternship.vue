<script lang="ts">
import { Internship } from "@/types/Internship";
import { ref, Ref } from "vue";
import {
  deleteInternshipById,
  getInternshipById,
} from "@/services/Internship.service";
import router from "@/router";

export interface ViewInternshipState {
  internship: Ref<Internship>;
  loadInternship: (internshipId: number) => Promise<void>;
  deleteInternship: (internshipId: number) => Promise<void>;
}

export function useViewInternship(): ViewInternshipState {
  const internship = ref<Internship>({} as Internship);

  async function loadInternship(internshipId: number) {
    try {
      internship.value = await getInternshipById(internshipId);
    } catch (e) {
      console.error(e);
      router.push("/internships");
    }
  }

  async function deleteInternship(internshipId: number) {
    await deleteInternshipById(internshipId);
    await router.push("/internships");
  }

  return {
    internship,
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
      @loadInternship="viewInternshipPage.loadInternship"
      @deleteInternship="viewInternshipPage.deleteInternship"
    ></ViewInternshipView>
  </Suspense>
</template>
