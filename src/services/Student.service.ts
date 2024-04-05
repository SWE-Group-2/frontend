import {Endpoints} from "@/constants/endpoints";
import HttpClient from "@/services/HttpClient";
import formatEndpoint from "@/utils/formatEndpoint";

export async function getAllStudents() {
    const response = await HttpClient.get(Endpoints.GET_ALL_STUDENTS);

    if (response.ok) {
        return response.json();
    } else {
        alert("Failed to get students");
    }
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

    if (response.status === 404) {
        alert("Student not found");
    } else {
        alert("Failed to get student");
    }

}
