<script setup lang="ts">
import { Student } from "@/types/Student";

// State of the view -- the list of students
defineProps<{
  students: Student[];
}>();

// Event of the view -- the loading of students
const emit = defineEmits<{
  (e: "loadStudents"): void;
}>();

// Call the loadStudents event to cause parent component to load students
emit("loadStudents");
</script>

<template>
  <div id="students">
    <div class="students-list-header">CS Students</div>
    <div id="table">
      <table id="students" aria-hidden="true">
        <tr class="table-header">
          <th>ID</th>
          <th>Name</th>
          <th>GPA</th>
          <th>Positions</th>
        </tr>
        <tr v-for="student of students">
          <td class="student-id">
            <div>
              <RouterLink
                style="text-decoration: none; color: inherit"
                :to="{
                  name: 'viewProfile',
                  params: { userId: student.id },
                }"
              >
                {{ student.id }}
              </RouterLink>
            </div>
          </td>
          <td class="student-name">
            <div>
              <RouterLink
                style="text-decoration: none; color: inherit"
                :to="{
                  name: 'viewProfile',
                  params: { userId: student.id },
                }"
              >
                {{ student.first_name }} {{ student.last_name }}
              </RouterLink>
            </div>
          </td>
          <td class="student-gpa">
            <div>
              <RouterLink
                style="text-decoration: none; color: inherit"
                :to="{
                  name: 'viewProfile',
                  params: { userId: student.id },
                }"
              >
                {{ student.gpa }}
              </RouterLink>
            </div>
          </td>
          <td class="student-positions">
            <div>
              <RouterLink
                style="text-decoration: none; color: inherit"
                :to="{
                  name: 'viewProfile',
                  params: { userId: student.id },
                }"
              >
                Software Engineer
              </RouterLink>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
@import "@/components/studentList/StudentList.css";
</style>
