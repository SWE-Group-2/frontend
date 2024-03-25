<script lang="ts">
import { ref, Ref } from "vue";
import { TimePeriod } from "@/types/TimePeriod";
import { getTimePeriods } from "@/services/TimePeriod.service";

export interface AdminDashboardState {
  // Define the state of the admin dashboard
  timePeriods: Ref<TimePeriod[]>;
  createTimePeriodName: Ref<string>;
  createTimePeriodStartDate: Ref<string>;
  createTimePeriodEndDate: Ref<string>;
  roleChangeUsername: Ref<string>;
  roleChangeRoleId: Ref<string>;
  // Define the events that can occur on the admin dashboard
  loadTimePeriods: () => void;
  createNewTimePeriod: () => void;
  deleteTimePeriod: (timePeriodId: number) => void;
  changeUserRole: () => void;
}

export function useAdminDashboard(): AdminDashboardState {
  // Define the state of the admin dashboard
  const timePeriods = ref<TimePeriod[]>([]);
  const createTimePeriodName = ref("");
  const createTimePeriodStartDate = ref("");
  const createTimePeriodEndDate = ref("");
  const roleChangeUsername = ref("");
  const roleChangeRoleId = ref("");
  // Define the events that can occur on the admin dashboard
  async function createNewTimePeriod() {
    // Create a new time period
  }
  async function deleteTimePeriod() {
    // Delete a time period
  }
  async function changeUserRole() {
    // Change the role of a user
  }
  async function loadTimePeriods() {
    timePeriods.value = await getTimePeriods();
  }

  return {
    timePeriods,
    createTimePeriodName,
    createTimePeriodStartDate,
    createTimePeriodEndDate,
    roleChangeUsername,
    roleChangeRoleId,
    createNewTimePeriod,
    deleteTimePeriod,
    changeUserRole,
    loadTimePeriods,
  };
}
</script>
<script setup lang="ts">
import AdminDashboardView from "@/components/adminDashboard/AdminDashboardView.vue";

const adminDashboard = useAdminDashboard();
</script>

<template>
  <AdminDashboardView
    v-model:time-periods="adminDashboard.timePeriods.value"
    v-model:create-time-period-name="adminDashboard.createTimePeriodName.value"
    v-model:create-time-period-start-date="
      adminDashboard.createTimePeriodStartDate.value
    "
    v-model:create-time-period-end-date="
      adminDashboard.createTimePeriodEndDate.value
    "
    v-model:role-change-username="adminDashboard.roleChangeUsername.value"
    v-model:role-change-role-id="adminDashboard.roleChangeRoleId.value"
    @load-time-periods="adminDashboard.loadTimePeriods"
    @create-new-time-period="adminDashboard.createNewTimePeriod"
    @change-user-role="adminDashboard.changeUserRole"
    @delete-time-period="adminDashboard.deleteTimePeriod"
  />
</template>

<style scoped lang="scss"></style>
