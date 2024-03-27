<script lang="ts">
import { Internship } from "@/types/Internship";
import { ref, Ref } from "vue";
import { getAllInternships } from "@/services/Internship.service";

type InternshipSortKey = "deadline" | "created_at";
type InternshipFilterKey = "position" | "company" | "time_period" | "flagged";

export interface InternshipListState {
  internships: Ref<Internship[]>;
  internshipFilterKey: Ref<string>;
  internshipFilterSearchTerm: Ref<string>;
  loadInternships: () => Promise<void>;
  sortInternships: (sortKey: InternshipSortKey) => void;
  filterInternships: (
    filterKey: InternshipFilterKey,
    searchTerm: string,
  ) => void;
  resetInternships: () => void;
}

export function useInternshipList(): InternshipListState {
  const internships = ref<Internship[]>([]);
  const internshipFilterKey = ref<string>("");
  const internshipFilterSearchTerm = ref<string>("");

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

  async function filterInternships() {
    const fetchedInternships: Internship[] = await getAllInternships();
    internships.value = fetchedInternships.filter((internship) => {
      return internship[internshipFilterKey.value]
        .toString()
        .toLowerCase()
        .includes(internshipFilterSearchTerm.value.toLowerCase());
    });
  }

  async function resetInternships() {
    await loadInternships();
  }

  return {
    internships,
    internshipFilterKey,
    internshipFilterSearchTerm,
    loadInternships,
    sortInternships,
    filterInternships,
    resetInternships,
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
      v-model:internship-filter-key="
        internshipListPage.internshipFilterKey.value
      "
      v-model:internship-filter-search-term="
        internshipListPage.internshipFilterSearchTerm.value
      "
      @loadInternships="internshipListPage.loadInternships"
      @sort-internships="internshipListPage.sortInternships"
      @filter-internships="internshipListPage.filterInternships"
      @reset-internships="internshipListPage.resetInternships"
    ></InternshipListView>
  </Suspense>
</template>
