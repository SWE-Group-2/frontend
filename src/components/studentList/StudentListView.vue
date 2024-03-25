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
    <div id="table" v-for="student of students">
      <table id="students" aria-hidden="true">
        <tr class="table-header">
          <th>ID</th>
          <th>Name</th>
          <th>GPA</th>
          <th>Positions</th>
          <th>Hello</th>
        </tr>
        <tr>
          <td class="student-id">
            <div>{{ student.id }}</div>
          </td>
          <td class="student-name">
            <div>{{ student.first_name }} {{ student.last_name }}</div>
          </td>
          <td class="student-gpa">
            <div>{{ student.gpa }}</div>
          </td>
          <td class="student-positions"><div>Software Engineer</div></td>
          <td>
            <RouterLink
              :to="{
                name: 'viewProfile',
                params: { userId: student.id },
              }"
            >View</RouterLink>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
@import "@/components/studentList/StudentList.css";
</style>
