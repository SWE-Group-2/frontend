<script lang="ts">
import { ref, type Ref } from "vue";
import {
  editInternship,
  getInternshipById,
  uploadInternshipPhoto,
} from "@/services/Internship.service";
import router from "@/router";

export interface EditInternshipState {
  company: Ref<string>;
  position: Ref<string>;
  website: Ref<string>;
  deadline: Ref<string>;
  timePeriodId: Ref<number>;
  companyPhotoLink: Ref<string | null>;
  uploadedImage: Ref<File | null>;
  edit: (internshipId: number) => Promise<void>;
  loadInternship: (internshipId: number) => Promise<void>;
}

export function useEditInternship(): EditInternshipState {
  const company = ref("");
  const position = ref("");
  const website = ref("");
  const deadline = ref("");
  const timePeriodId = ref(1);
  const companyPhotoLink = ref(null);
  const uploadedImage = ref(null);

  async function edit(internshipId: number) {
    if (uploadedImage.value) {
      const response = await uploadInternshipPhoto(
        internshipId,
        uploadedImage.value,
      );
      companyPhotoLink.value = response.url;
    }
    await editInternship(internshipId, {
      company: company.value,
      position: position.value,
      website: website.value,
      deadline: deadline.value,
      timePeriodId: timePeriodId.value,
      companyPhotoLink: companyPhotoLink.value,
    });
    await router.push("/internships");
  }

  async function loadInternship(internshipId: number) {
    const internship = await getInternshipById(internshipId);
    company.value = internship.company;
    position.value = internship.position;
    website.value = internship.website;
    deadline.value = internship.deadline;
    timePeriodId.value = internship.time_period_id;
    companyPhotoLink.value = internship.company_photo_link;
  }

  return {
    company,
    position,
    website,
    deadline,
    timePeriodId,
    companyPhotoLink,
    uploadedImage,
    edit,
    loadInternship,
  };
}
</script>

<script setup lang="ts">
import EditInternshipView from "@/components/editInternship/EditInternshipView.vue";

const editInternshipPage = useEditInternship();
</script>

<template>
  <Suspense>
    <EditInternshipView
      v-model:company="editInternshipPage.company.value"
      v-model:position="editInternshipPage.position.value"
      v-model:website="editInternshipPage.website.value"
      v-model:deadline="editInternshipPage.deadline.value"
      v-model:timePeriodId="editInternshipPage.timePeriodId.value"
      v-model:companyPhotoLink="editInternshipPage.companyPhotoLink.value"
      v-model:uploadedImage="editInternshipPage.uploadedImage.value"
      @edit="editInternshipPage.edit"
      @load-internship="editInternshipPage.loadInternship"
    />
  </Suspense>
</template>
