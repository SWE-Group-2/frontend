import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { getAllStudents, getStudentById } from "@/services/Student.service";

describe("Student service tests", () => {
  function mockFetch(returnData: object) {
    global.fetch = vi
      .fn()
      .mockResolvedValue({ json: () => Promise.resolve(returnData) });
  }

  beforeEach(() => {
    mockFetch({
      id: 1,
      first_name: "Justin",
      last_name: "Copeland",
      gpa: 4.0,
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test("Can get students", async () => {
    try {
      await getAllStudents();
    } catch (e) {
      /* ignore */
    }
    expect(fetch).toHaveBeenCalledWith("http://localhost:5000/users/students", {
      headers: {},
    });
  });

  test("Can get student by id", async () => {
    const studentId = 1;
    try {
      await getStudentById(studentId);
    } catch (e) {
      /* ignore */
    }
    expect(fetch).toHaveBeenCalledWith(
      `http://localhost:5000/users/${studentId}`,
      {
        headers: {},
      },
    );
  });
});
