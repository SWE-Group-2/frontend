<script lang="ts">
import { ref, Ref } from "vue";
import { getAllStudents } from "@/services/Student.service";
import { User } from "@/types/User";

export interface StudentListState {
  students: Ref<User[]>;
  loadStudents: () => void;
}

export function useStudentList(): StudentListState {
  const students = ref<User[]>([]);

  async function loadStudents() {
    students.value = await getAllStudents();
  }

  return {
    students,
    loadStudents,
  };
}
</script>

<script setup lang="ts">
import StudentListView from "@/components/studentList/StudentListView.vue";

const studentListPage = useStudentList();
</script>

<template>
  <Suspense>
    <StudentListView
      v-model:students="studentListPage.students.value"
      @loadStudents="studentListPage.loadStudents"
    ></StudentListView>
  </Suspense>
</template>
