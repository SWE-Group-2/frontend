import { Endpoints } from "@/constants/endpoints";
import HttpClient from "@/services/HttpClient";
import { TimePeriodCreate } from "@/types/TimePeriodCreate";

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
