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
        alert("Invalid input");
        // throw new Error("Invalid input");
    } else if (response.status === 401) {
        alert("Unauthorized");
        // throw new Error("Unauthorized");
    }

    throw new Error("Failed to create time period");
}

export async function changeUserRole(username: string, roleId: number) {
    const response = await HttpClient.put(formatEndpoint(Endpoints.CHANGE_USER_ROLE, {username: username}), {role_id: roleId}, true);

    if (response.ok) {
        return response.json();
    }

    if (response.status === 400) {
        alert("Invalid input");
        // throw new Error("Invalid input");
    } else if (response.status === 401) {
        alert("Unauthorized");
        // throw new Error("Unauthorized");
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
            alert("Unauthorized");
        case 404:
            alert("Time period not found");
        default:
            alert("Time period is in use and cannot be deleted.");
    }
}

export async function deleteUserById(userId: number) {
    const response = await HttpClient.delete(
        formatEndpoint(Endpoints.DELETE_USER, {
            user_id: userId.toString(),
        }),
        true,
    );

    if (response.ok) {
        return response.json();
    }

    switch (response.status) {
        case 401:
            alert("Unauthorized");
            // throw new Error("Unauthorized");
        case 404:
            alert("User not found");
            // throw new Error("User not found");
        default:
            alert("Failed to delete user");
            // throw new Error("Failed to delete user");
    }
}
