<script setup lang="ts">
import { Internship } from "@/types/Internship";
import { getValidTimePeriods } from "@/services/TimePeriod.service";
import { TimePeriod } from "@/types/TimePeriod";

// State of the view -- the list of internships
defineProps<{
  internships: Internship[];
}>();

// Events of the view -- the loading of internships
const emit = defineEmits<{
  (e: "loadInternships"): void;
}>();

// Call the loadInternships event to cause parent component to load internships
emit("loadInternships");

// Time periods on the other hand not state. They are just a constant.
const timePeriods: TimePeriod[] = await getValidTimePeriods();

// Use this function to get the name of a time period given its id
function getTimePeriodName(id: number): string {
  return (
    timePeriods.find((time_period: TimePeriod) => time_period.id === id)
      ?.name ?? "Unknown"
  );
}
</script>
<template>
  <div id="internships">
    <div class="internships-list-header">Internships</div>

    <div class="button-container">
      <RouterLink to="/create-internship">
        <button class="icon-box" title="Create internship">
          <img class="icon" src="/icon-plus.svg" alt="new" />
        </button>
      </RouterLink>
    </div>
    <div id="internships">
      <div class="internship-card" v-for="internship of internships">
        <RouterLink
          :to="{
            name: 'viewInternship',
            params: { internshipId: internship.id },
          }"
          style="text-decoration: none"
          ><div class="internship-container">
            <div class="photo">
              <img src="/logo_thegang.png" alt="logo" />
            </div>
            <div class="column">
              <div class="row">
                <span class="company-offer">
                  {{ internship.position }}
                </span>
                @
                <span class="company-info">
                  {{ internship.company }}
                </span>
              </div>
              <div class="row">
                Internship Period:
                <span class="company-info">
                  {{ getTimePeriodName(internship.time_period_id) }}
                </span>
              </div>
              <div class="row">
                Application Deadline:
                <span class="company-info">
                  {{ internship.deadline }}
                </span>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/components/internshipList/InternshipList.css";
</style>
