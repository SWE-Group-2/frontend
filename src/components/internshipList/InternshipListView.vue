<script setup lang="ts">
import { Internship } from "@/types/Internship";
import { getValidTimePeriods } from "@/services/TimePeriod.service";
import { TimePeriod } from "@/types/TimePeriod";

// State of the view -- the list of internships
defineProps<{
  internships: Internship[];
  internshipFilterKey: string;
  internshipFilterSearchTerm: string;
}>();

// Events of the view -- the loading of internships
const emit = defineEmits<{
  (e: "loadInternships"): void;
  (e: "sortInternships", sortKey: string): void;
  (e: "filterInternships"): void;
  (e: "resetInternships"): void;
  (e: "update:internshipFilterKey", value: string): void;
  (e: "update:internshipFilterSearchTerm", value: string): void;
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
    <div class="sort-button-container">
      <select @change="$emit('sortInternships', $event.target.value)">
        <option value="created_at">Sort by Created At</option>
        <option value="deadline">Sort by Deadline</option>
      </select>
    </div>
    <div class="filter-internship-container">
      <select
        @change="$emit('update:internshipFilterKey', $event.target.value)"
        :value="internshipFilterKey"
      >
        <option value="position">Position</option>
        <option value="company">Company</option>
        <option value="time_period">Time Period</option>
        <option value="flagged">Flagged</option>
      </select>
      <input
        v-if="
          internshipFilterKey === 'position' ||
          internshipFilterKey === 'company'
        "
        type="text"
        :value="internshipFilterSearchTerm"
        @input="$emit('update:internshipFilterSearchTerm', $event.target.value)"
      />
      <select
        v-if="internshipFilterKey === 'time_period'"
        :value="internshipFilterSearchTerm"
        @change="
          $emit('update:internshipFilterSearchTerm', $event.target.value)
        "
      >
        <option v-for="timePeriod in timePeriods" :value="timePeriod.name">
          {{ timePeriod.name }}
        </option>
      </select>
      <select
        v-if="internshipFilterKey === 'flagged'"
        :value="internshipFilterSearchTerm"
        @change="
          $emit('update:internshipFilterSearchTerm', $event.target.value)
        "
      >
        <option value="true">Flagged</option>
        <option value="false">Not Flagged</option>
      </select>
      <button @click="$emit('filterInternships')">Filter</button>
      <button @click="$emit('resetInternships')">Reset</button>
    </div>

    <div id="internships">
      <div class="student-container" v-for="internship of internships">
        <div>
          <div class="photo">
            <img src="/logo_thegang.png" alt="logo" />
          </div>
        </div>
        <div class="column">
          <div class="row">
            {{ internship.position }} at {{ internship.company }}
          </div>
          <div class="row">
            Internship Period:
            {{ getTimePeriodName(internship.time_period_id) }}
          </div>
          <div class="row">Application Deadline: {{ internship.deadline }}</div>
          <div class="row">
            <RouterLink
              :to="{
                name: 'viewInternship',
                params: { internshipId: internship.id },
              }"
            >
              <button>View</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/components/internshipList/InternshipList.css";
</style>
