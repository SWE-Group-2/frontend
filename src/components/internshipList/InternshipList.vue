<script lang="ts">
import { Internship } from "@/types/Internship";
import { ref, Ref } from "vue";
import { getAllInternships } from "@/services/Internship.service";

type InternshipSortKey = "deadline" | "created_at";

export interface InternshipListState {
  internships: Ref<Internship[]>;
  loadInternships: () => Promise<void>;
  sortInternships: (sortKey: InternshipSortKey) => void;
}

export function useInternshipList(): InternshipListState {
  const internships = ref<Internship[]>([]);

  async function loadInternships() {
    await sortInternships("created_at");
  }

  async function sortInternships(sortKey: InternshipSortKey) {
    const fetchedInternships: Internship[] = await getAllInternships();
    internships.value = fetchedInternships.sort((a, b) => {
      const aDate = new Date(a[sortKey]);
      const bDate = new Date(b[sortKey]);
      return bDate.getTime() - aDate.getTime();
    });
  }

  return {
    internships,
    loadInternships,
    sortInternships,
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
      @sort-internships="internshipListPage.sortInternships"
    ></InternshipListView>
  </Suspense>
</template>
