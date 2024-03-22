import { Endpoints } from "@/constants/endpoints";

function formatEndpoint(
  endpoint: Endpoints,
  params: { [key: string]: string },
): string {
  let formattedEndpoint: string = endpoint;
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      formattedEndpoint = formattedEndpoint.replace(`{${key}}`, params[key]);
    }
  }
  return formattedEndpoint;
}

export default formatEndpoint;
