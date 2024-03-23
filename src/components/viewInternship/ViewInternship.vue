<script lang="ts">
import { Internship } from "@/types/Internship";
import { ref, Ref } from "vue";
import { getInternshipById } from "@/services/Internship.service";

export interface ViewInternshipState {
  internship: Ref<Internship>;
  loadInternship: (internshipId: number) => Promise<void>;
}

export function useViewInternship(): ViewInternshipState {
  const internship = ref<Internship>({} as Internship);

  async function loadInternship(internshipId: number) {
    internship.value = await getInternshipById(internshipId);
  }

  return {
    internship,
    loadInternship,
  };
}
</script>
<script setup lang="ts">
import ViewInternshipView from "@/views/ViewInternshipView.vue";

const viewInternshipPage = useViewInternship();
</script>
<template>
  <Suspense>
    <ViewInternshipView
      v-model:internship="viewInternshipPage.internship.value"
      @loadInternship="viewInternshipPage.loadInternship"
    ></ViewInternshipView>
  </Suspense>
</template>
