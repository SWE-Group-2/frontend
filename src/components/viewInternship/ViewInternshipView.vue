<script setup lang="ts">
import { Internship } from "@/types/Internship";
import { TimePeriod } from "@/types/TimePeriod";
import { getValidTimePeriods } from "@/services/TimePeriod.service";
import { useRoute } from "vue-router";
import { getCurrentUserId } from "@/services/Auth.service";

defineProps<{
  internship: Internship;
}>();
const emit = defineEmits<{
  (e: "loadInternship", value: number): void;
  (e: "deleteInternship", value: number): void;
}>();
const timePeriods: TimePeriod[] = await getValidTimePeriods();
const route = useRoute();
const internshipId = Number(route.params.internshipId);
const userId = await getCurrentUserId();
emit("loadInternship", internshipId);

function getTimePeriodName(id: number): string {
  return (
    timePeriods.find((time_period: TimePeriod) => time_period.id === id)
      ?.name ?? "Unknown"
  );
}
</script>
<template>
  <div id="edit-internship">
    <div class="mid">
      <div class="container">
        <div class="row">
          <h1 class="title">Internship Information</h1>
        </div>
        <div v-if="userId == internship.author_id">
          <RouterLink
            :to="{
              name: 'editInternship',
              params: { internshipId: internship.id },
            }"
          >
            <button>Edit</button>
          </RouterLink>
          <button @click="() => emit('deleteInternship', internship.id)">
            Delete
          </button>
        </div>
        <div class="row">
          <div class="column">
            <h3>Company</h3>
            {{ internship.company }}
          </div>
          <div class="input-field">
            <h3>Position</h3>
            {{ internship.position }}
          </div>
          <div class="input-field">
            <h3>Apply At</h3>
            {{ internship.website }}
          </div>
          <div class="input-field">
            <h3>Time Period</h3>
            {{ getTimePeriodName(internship.time_period_id) }}
          </div>
          <div class="input-field">
            <h3>Deadline</h3>
            {{ internship.deadline }}
          </div>
        </div>
        <div class="column">
          <div class="photo">
            <img src="/logo_thegang.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
