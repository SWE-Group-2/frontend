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
  <div id="view-internship">
    <div class="internship-header">Internship Information</div>
    <div class="internship-container">
      <div class="top">
        <div class="photo">
          <img src="/logo_thegang.png" alt="logo" />
        </div>
        <div class="main">
          <div class="row">
            <span class="title">Company:</span>
            <span class="name">
              {{ internship.company }}
            </span>
          </div>
          <div class="row">
            <span class="title">Position:</span>
            <span class="position">
              {{ internship.position }}
            </span>
          </div>
        </div>
        <div class="controls">
          <div class="more-controls" v-if="userId == internship.author_id">
            <RouterLink
              :to="{
                name: 'editInternship',
                params: { internshipId: internship.id },
              }"
            >
              <button class="icon-box" title="Edit internship">
                <img class="icon" src="/icon-edit.svg" alt="edit" />
              </button>
            </RouterLink>
            <button
              class="icon-box"
              title="Delete internship"
              @click="() => emit('deleteInternship', internship.id)"
            >
              <img class="icon-trash" src="/icon-trash.svg" alt="delete" />
            </button>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="body">
        <div class="row">
          <span class="title">Time Period:</span>
          <span>
            {{ getTimePeriodName(internship.time_period_id) }}
          </span>
        </div>
        <div class="row">
          <span class="title">Deadline:</span>
          <span>
            {{ internship.deadline }}
          </span>
        </div>
        <div class="row">
          <span class="title">Apply on:</span>
          <span class="link">
            {{ internship.website }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/components/viewInternship/ViewInternship.css";
</style>
