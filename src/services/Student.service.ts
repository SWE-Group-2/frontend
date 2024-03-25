import { Endpoints } from "@/constants/endpoints";
import HttpClient from "@/services/HttpClient";
import formatEndpoint from "@/utils/formatEndpoint";

export async function getAllStudents() {
  const response = await HttpClient.get(Endpoints.GET_ALL_STUDENTS);

  if (response.ok) {
    return response.json();
  }

  throw new Error("Failed to get students");
}

export async function getStudentById(userId: number) {
  const response = await HttpClient.get(
    formatEndpoint(Endpoints.GET_USER_BY_ID, {
      user_id: userId.toString(),
    }),
  );

  if (response.ok) {
    return response.json();
  }

  switch (response.status) {
    case 404:
      throw new Error("Student not found");
    default:
      throw new Error("Failed to get student");
  }
}
