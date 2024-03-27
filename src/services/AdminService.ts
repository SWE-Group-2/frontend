import {Endpoints} from "@/constants/endpoints";
import HttpClient from "@/services/HttpClient";
import {TimePeriodCreate} from "@/types/TimePeriodCreate";
import formatEndpoint from "@/utils/formatEndpoint";

export async function createTimePeriod(timePeriod: TimePeriodCreate) {
    const response = await HttpClient.post(
        Endpoints.CREATE_TIME_PERIOD,
        timePeriod,
        true,
    );

    if (response.ok) {
        return response.json();
    }

    if (response.status === 400) {
        throw new Error("Invalid input");
    } else if (response.status === 401) {
        throw new Error("Unauthorized");
    }

    throw new Error("Failed to create time period");
}

export async function changeUserRole(username: string, roleId: number) {
    const response = await HttpClient.put(formatEndpoint(Endpoints.CHANGE_USER_ROLE, {username: username}), {role_id: roleId}, true);

    if (response.ok) {
        return response.json();
    }

    if (response.status === 400) {
        throw new Error("Invalid input");
    } else if (response.status === 401) {
        throw new Error("Unauthorized");
    }

    throw new Error("Failed to change user role");
}