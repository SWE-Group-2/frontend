<script lang="ts">
import { Student } from "@/types/Student";
import { ref, Ref } from "vue";
import { getAllStudents } from "@/services/Student.service";

export interface StudentListState {
    students: Ref<Student[]>;
    loadStudents: () => Promise<void>;
}

export function useStudentList(): StudentListState {
    const students = ref<Student[]>([]);

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