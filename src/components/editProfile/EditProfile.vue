<script lang="ts">
import { ref, type Ref } from "vue";
import { editProfile, getUserById } from "@/services/User.service";
import router from "@/router";

export interface EditProfileState {
  username: Ref<string>;
  first_name: Ref<string>;
  last_name: Ref<string>;
  gpa: Ref<number>;
  academic_year: Ref<string>;
  email: Ref<string>;
  phone_number: Ref<string>;
  description: Ref<string>;
  github_link: Ref<string>;
  linkedin_link: Ref<string>;
  website_link: Ref<string>;
  internship_time_period_id: Ref<number>;
  profile_picture_link: Ref<string | null>;
  edit: (userId: number) => Promise<void>;
  loadUser: (userId: number) => Promise<void>;
}

export function useEditProfile(): EditProfileState {
  const username = ref("");
  const first_name = ref("");
  const last_name = ref("");
  const gpa = ref(0);
  const academic_year = ref("");
  const email = ref("");
  const phone_number = ref("");
  const description = ref("");
  const github_link = ref("");
  const linkedin_link = ref("");
  const website_link = ref("");
  const internship_time_period_id = ref(1);
  const profile_picture_link = ref(null);

  async function edit(userId: number) {
    await editProfile(userId, {
      first_name: first_name.value,
      last_name: last_name.value,
      gpa: gpa.value,
      academic_year: academic_year.value,
      email: email.value,
      phone_number: phone_number.value,
      description: description.value,
      github_link: github_link.value,
      linkedin_link: linkedin_link.value,
      website_link: website_link.value,
      internship_time_period_id: internship_time_period_id.value,
      profile_picture_link: profile_picture_link.value,
    });
    await router.push(`/users/${userId}`);
  }

  async function loadUser(userId: number) {
    const user = await getUserById(userId);
    username.value = user.username;
    gpa.value = user.gpa;
    academic_year.value = user.academic_year;
    email.value = user.email;
    phone_number.value = user.phone_number;
    description.value = user.description;
    github_link.value = user.github_link;
    linkedin_link.value = user.linkedin_link;
    website_link.value = user.website_link;
    internship_time_period_id.value = user.internship_time_period_id;
    profile_picture_link.value = user.profile_picture_link;
  }

  return {
    username,
    first_name,
    last_name,
    gpa,
    academic_year,
    email,
    phone_number,
    description,
    github_link,
    linkedin_link,
    website_link,
    internship_time_period_id,
    profile_picture_link,
    edit,
    loadUser,
  };
}
</script>

<script setup lang="ts">
import EditProfileView from "@/components/editProfile/EditProfileView.vue";

const editProfilePage = useEditProfile();
</script>

<template>
  <Suspense>
    <EditProfileView
      v-model:username="editProfilePage.username.value"
      v-model:first_name="editProfilePage.first_name.value"
      v-model:last_name="editProfilePage.last_name.value"
      v-model:gpa="editProfilePage.gpa.value"
      v-model:academic_year="editProfilePage.academic_year.value"
      v-model:email="editProfilePage.email.value"
      v-model:phone_number="editProfilePage.phone_number.value"
      v-model:description="editProfilePage.description.value"
      v-model:github_link="editProfilePage.github_link.value"
      v-model:linkedin_link="editProfilePage.linkedin_link.value"
      v-model:website_link="editProfilePage.website_link.value"
      v-model:internship_time_period_id="
        editProfilePage.internship_time_period_id.value
      "
      v-model:profile_picture_link="editProfilePage.profile_picture_link.value"
      @edit="editProfilePage.edit"
      @load-user="editProfilePage.loadUser"
    />
  </Suspense>
</template>
