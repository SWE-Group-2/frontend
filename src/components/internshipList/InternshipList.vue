<script lang="ts">
import { Internship } from "@/types/Internship";
import { ref, Ref } from "vue";
import { getAllInternships } from "@/services/Internship.service";

export interface InternshipListState {
  internships: Ref<Internship[]>;
  loadInternships: () => Promise<void>;
}

export function useInternshipList(): InternshipListState {
  const internships = ref<Internship[]>([]);

  async function loadInternships() {
    internships.value = await getAllInternships();
  }

  return {
    internships,
    loadInternships,
  };
}
</script>
<script setup lang="ts">
import InternshipListView from "@/components/internshipList/InternshipListView.vue";

const internshipListPage = useInternshipList();
</script>
<template>
  <Suspense>
    <InternshipListView
      v-model:internships="internshipListPage.internships.value"
      @loadInternships="internshipListPage.loadInternships"
    ></InternshipListView>
  </Suspense>
</template>
