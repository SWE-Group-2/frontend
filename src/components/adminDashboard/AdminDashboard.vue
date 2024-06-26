<script lang="ts">
import { ref, Ref } from "vue";
import { TimePeriod } from "@/types/TimePeriod";
import { getAllTimePeriods } from "@/services/TimePeriod.service";
import { getAllStudents } from "@/services/Student.service";
import { User } from "@/types/User";
import {
  changeUserRole,
  createTimePeriod,
  deleteTimePeriodById,
} from "@/services/AdminService";

export interface AdminDashboardState {
  // Define the state of the admin dashboard
  timePeriods: Ref<TimePeriod[]>;
  createTimePeriodName: Ref<string>;
  createTimePeriodStartDate: Ref<string>;
  createTimePeriodEndDate: Ref<string>;
  roleChangeUsername: Ref<string>;
  roleChangeRoleId: Ref<number>;
  students: Ref<User[]>;
  // Define the events that can occur on the admin dashboard
  loadTimePeriods: () => void;
  createNewTimePeriod: () => void;
  deleteTimePeriod: (timePeriodId: number) => void;
  changeRole: () => void;
  loadStudents: () => void;
}

export function useAdminDashboard(): AdminDashboardState {
  // Define the state of the admin dashboard
  const timePeriods = ref<TimePeriod[]>([]);
  const createTimePeriodName = ref("");
  const createTimePeriodStartDate = ref("");
  const createTimePeriodEndDate = ref("");
  const roleChangeUsername = ref("");
  const roleChangeRoleId = ref(0);
  const students = ref<User[]>([]);
  // Define the events that can occur on the admin dashboard
  async function createNewTimePeriod() {
    const newTimePeriod = {
      name: createTimePeriodName.value,
      start_date: createTimePeriodStartDate.value,
      end_date: createTimePeriodEndDate.value,
    };
    await createTimePeriod(newTimePeriod);
    await loadTimePeriods();
  }
  async function deleteTimePeriod(timePeriodId: number) {
    await deleteTimePeriodById(timePeriodId);
    await loadTimePeriods();
  }
  async function changeRole() {
    await changeUserRole(roleChangeUsername.value, roleChangeRoleId.value);
  }
  async function loadTimePeriods() {
    timePeriods.value = await getAllTimePeriods();
  }
  async function loadStudents() {
    students.value = await getAllStudents();
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
    changeRole,
    loadTimePeriods,
    students,
    loadStudents,
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
    v-model:students="adminDashboard.students.value"
    v-model:role-change-username="adminDashboard.roleChangeUsername.value"
    v-model:role-change-role-id="adminDashboard.roleChangeRoleId.value"
    @load-time-periods="adminDashboard.loadTimePeriods"
    @create-new-time-period="adminDashboard.createNewTimePeriod"
    @change-role="adminDashboard.changeRole"
    @delete-time-period="adminDashboard.deleteTimePeriod"
    @load-students="adminDashboard.loadStudents"
  />
</template>
