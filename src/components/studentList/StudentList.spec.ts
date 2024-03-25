import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, test, vi } from "vitest";
import * as StudentService from "@/services/Student.service";
import { useStudentList } from "@/components/studentList/StudentList.vue";

describe("CreateStudent tests", () => {
  beforeEach(() => {
    const mockData = [
      {
        id: 1,
        first_name: "Justin",
        last_name: "Copeland",
        gpa: 4.0,
      },
    ];

    // Intercept calls to StudentService's get all students and return mock data instead
    vi.spyOn(StudentService, "getAllStudents").mockResolvedValue(mockData);
  });

  test("Can mount", () => {
    const wrapper = mount(useStudentList());
    expect(wrapper.exists()).toBe(true);
  });

  test("Internal state test", async () => {
    // Before loading students, the list should be empty
    const studentList = useStudentList();
    expect(studentList.students.value).toEqual([]);

    // After loading students, the list should not be empty
    await studentList.loadStudents();
    expect(studentList.students.value.length).toBeGreaterThan(0);
  });
});
