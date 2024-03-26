<script setup lang="ts">
import { TimePeriod } from "@/types/TimePeriod";

defineProps<{
  timePeriods: TimePeriod[];
  createTimePeriodName: string;
  createTimePeriodStartDate: string;
  createTimePeriodEndDate: string;
  roleChangeUsername: string;
  roleChangeRoleId: number;
}>();

const emit = defineEmits<{
  (e: "loadTimePeriods"): void;
  (e: "createNewTimePeriod"): void;
  (e: "deleteTimePeriod", timePeriodId: number): void;
  (e: "changeUserRole"): void;
  (e: "update:createTimePeriodName", value: string): void;
  (e: "update:createTimePeriodStartDate", value: string): void;
  (e: "update:createTimePeriodEndDate", value: string): void;
  (e: "update:roleChangeUsername", value: string): void;
  (e: "update:roleChangeRoleId", value: string): void;
}>();

emit("loadTimePeriods");

// this should be call to backend but... for now it's just a constant
const roles = ["admin", "instructor", "student"];
</script>
<template>
  <div class="admin-dashboard">
    <h1>Admin Dashboard</h1>

    <h2>Time Periods</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="timePeriod in timePeriods">
          <td>{{ timePeriod.name }}</td>
          <td>{{ timePeriod.start_date }}</td>
          <td>{{ timePeriod.end_date }}</td>
          <td>
            <button @click="$emit('deleteTimePeriod', timePeriod.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Add Time Period</h3>
    <form @submit.prevent="$emit('createNewTimePeriod')">
      <div class="search-bar">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          :value="createTimePeriodName"
          @input="$emit('update:createTimePeriodName', $event.target.value)"
        />
        <label for="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          :value="createTimePeriodStartDate"
          @input="
            $emit('update:createTimePeriodStartDate', $event.target.value)
          "
        />
        <label for="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          :value="createTimePeriodEndDate"
          @input="$emit('update:createTimePeriodEndDate', $event.target.value)"
        />
        <button type="submit">Create</button>
      </div>
    </form>
    <h2>Users</h2>
    <h3>Change User Role</h3>
    <form @submit.prevent="$emit('changeUserRole')">
      <div class="user-form">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          :value="roleChangeUsername"
          @input="$emit('update:roleChangeUsername', $event.target.value)"
        />
        <label for="role">Role:</label>
        <select
          id="role"
          :value="roleChangeRoleId"
          @change="$emit('update:roleChangeRoleId', $event.target.value)"
        >
          <option v-for="(role, index) in roles" :value="index + 1">
            {{ role }}
          </option>
        </select>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
@import "@/components/adminDashboard/AdminDashboard.css";
</style>
