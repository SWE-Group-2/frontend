<script setup lang="ts">
import { getTimePeriods } from "@/services/TimePeriodService.spec";
import { TimePeriod } from "@/types/TimePeriod";

defineProps<{
  company: string;
  position: string;
  website: string;
  deadline: string;
  timePeriodId: number;
  companyPhotoLink: string | null;
}>();
defineEmits<{
  (e: "update:company", value: string): void;
  (e: "update:position", value: string): void;
  (e: "update:website", value: string): void;
  (e: "update:deadline", value: string): void;
  (e: "update:timePeriodId", value: string): void;
  (e: "update:companyPhotoLink", value: string | null): void;
  (e: "create"): void;
}>();
const timePeriodOptions: TimePeriod[] = await getTimePeriods();
</script>

<style>
@import "@/components/createInternship/CreateInternship.css";
</style>
<template>
  <div id="edit-internship">
    <h1 class="header">Edit Internship Post</h1>
    <div class="mid">
      <div class="container">
        <form @submit.prevent="$emit('create')">
          <div class="row">
            <h1 class="title">Internship Information</h1>
          </div>
          <div class="row">
            <div class="column">
              <div class="input-field">
                <input
                  :value="company"
                  @input="$emit('update:company', $event.target.value)"
                  type="text"
                  required
                  spellcheck="false"
                />
                <label>Company</label>
              </div>
              <div class="input-field">
                <input
                  :value="position"
                  @input="$emit('update:position', $event.target.value)"
                  type="text"
                  required
                  spellcheck="false"
                />
                <label>Position</label>
              </div>
              <div class="input-field">
                <input
                  :value="website"
                  @input="$emit('update:website', $event.target.value)"
                  type="text"
                  required
                  spellcheck="false"
                />
                <label>Application Link</label>
              </div>
              <div class="input-field">
                <select
                  :value="timePeriodId"
                  @change="$emit('update:timePeriodId', $event.target.value)"
                >
                  <option
                    v-for="option in timePeriodOptions"
                    :value="option.id"
                  >
                    {{ option.name }}
                  </option>
                </select>
                <label>Internship Period</label>
              </div>
              <div class="input-field">
                <input
                  :value="deadline"
                  type="date"
                  @change="$emit('update:deadline', $event.target.value)"
                />
                <label>Application Deadline</label>
              </div>
            </div>
            <div class="column">
              <div class="photo">
                <img src="/logo_thegang.png" alt="logo" />
              </div>
            </div>
          </div>
          <div class="row">
            <button type="submit">Submit Internship</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
