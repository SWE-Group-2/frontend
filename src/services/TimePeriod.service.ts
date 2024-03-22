import {Endpoints} from "@/constants/endpoints";
import HttpClient from "@/services/HttpClient";

export async function getTimePeriods() {
  const response = await HttpClient.get(Endpoints.GET_TIME_PERIODS, true);

  if (response.ok) {
    return response.json();
  }

  throw new Error("Failed to get time periods");
}
