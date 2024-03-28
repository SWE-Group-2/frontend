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

export async function deleteTimePeriodById(timePeriodId: number) {
    const response = await HttpClient.delete(
        formatEndpoint(Endpoints.DELETE_TIME_PERIOD_BY_ID, {
            time_period_id: timePeriodId.toString(),
        }),
        true,
    );

    if (response.ok) {
        return response.json();
    }

    switch (response.status) {
        case 401:
            throw new Error("Unauthorized");
        case 404:
            throw new Error("Time period not found");
        default:
            throw new Error("Failed to delete time period");
    }
}