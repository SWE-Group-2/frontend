<script lang="ts">
import { ref, Ref } from "vue";

export interface AdminDashboardState {
  // Define the state of the admin dashboard
  createTimePeriodName: Ref<string>;
  createTimePeriodStartDate: Ref<string>;
  createTimePeriodEndDate: Ref<string>;
  roleChangeUsername: Ref<string>;
  roleChangeRoleId: Ref<string>;
  // Define the events that can occur on the admin dashboard
  createNewTimePeriod: () => void;
  changeUserRole: () => void;
}

export function useAdminDashboard(): AdminDashboardState {
  // Define the state of the admin dashboard
  const createTimePeriodName = ref("");
  const createTimePeriodStartDate = ref("");
  const createTimePeriodEndDate = ref("");
  const roleChangeUsername = ref("");
  const roleChangeRoleId = ref("");
  // Define the events that can occur on the admin dashboard
  function createNewTimePeriod() {
    // Create a new time period
  }
  function changeUserRole() {
    // Change the role of a user
  }
  return {
    createTimePeriodName,
    createTimePeriodStartDate,
    createTimePeriodEndDate,
    roleChangeUsername,
    roleChangeRoleId,
    createNewTimePeriod,
    changeUserRole,
  };
}
</script>
<script setup lang="ts">
import AdminDashboardView from "@/components/adminDashboard/AdminDashboardView.vue";
</script>

<template>
  <AdminDashboardView></AdminDashboardView>
</template>

<style scoped lang="scss"></style>
