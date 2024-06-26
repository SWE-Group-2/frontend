<script lang="ts">
import { ref, type Ref } from "vue";
import { createInternship } from "@/services/Internship.service";
import router from "@/router";

export interface CreateInternshipState {
  company: Ref<string>;
  position: Ref<string>;
  website: Ref<string>;
  deadline: Ref<string>;
  timePeriodId: Ref<number>;
  companyPhotoLink: Ref<string | null>;
  create: () => Promise<void>;
}

export function useCreateInternship(): CreateInternshipState {
  const company = ref("");
  const position = ref("");
  const website = ref("");
  const deadline = ref("");
  const timePeriodId = ref(1);
  const companyPhotoLink = ref(null);

  async function create() {
    if (website.value.length > 0 && !website.value.startsWith("http")) {
      website.value = `https://${website.value}`;
    }

    await createInternship({
      company: company.value,
      position: position.value,
      website: website.value,
      deadline: deadline.value,
      timePeriodId: timePeriodId.value,
      companyPhotoLink: companyPhotoLink.value,
    });
    await router.push("/internships");
  }

  return {
    company,
    position,
    website,
    deadline,
    timePeriodId,
    companyPhotoLink,
    create,
  };
}
</script>

<script setup lang="ts">
import CreateInternshipView from "@/components/createInternship/CreateInternshipView.vue";

const createInternshipPage = useCreateInternship();
</script>

<template>
  <Suspense>
    <CreateInternshipView
      v-model:company="createInternshipPage.company.value"
      v-model:position="createInternshipPage.position.value"
      v-model:website="createInternshipPage.website.value"
      v-model:deadline="createInternshipPage.deadline.value"
      v-model:timePeriodId="createInternshipPage.timePeriodId.value"
      v-model:companyPhotoLink="createInternshipPage.companyPhotoLink.value"
      @create="createInternshipPage.create"
    />
  </Suspense>
</template>
