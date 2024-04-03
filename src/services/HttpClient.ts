import { authHeader } from "@/services/Auth.service";

class HttpClient {
  private static baseUrl: string = "http://localhost:5000";

  static async get(url: string, authRequired: boolean = false) {
    return fetch(`${this.baseUrl}${url}`, {
      headers: authRequired ? authHeader() : {},
    });
  }

  static async post(url: string, data: object, authRequired: boolean = false) {
    return fetch(`${this.baseUrl}${url}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...(authRequired ? authHeader() : {}),
      },
    });
  }

  static async put(url: string, data: object, authRequired: boolean = false) {
    return fetch(`${this.baseUrl}${url}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...(authRequired ? authHeader() : {}),
      },
    });
  }

  static async delete(url: string, authRequired: boolean = false) {
    return fetch(`${this.baseUrl}${url}`, {
      method: "DELETE",
      headers: {
        ...(authRequired ? authHeader() : {}),
      },
    });
  }

  static async putFile(url: string, file: File, authRequired: boolean = false) {
    const formData = new FormData();
    formData.append("file", file);

    return fetch(`${this.baseUrl}${url}`, {
      method: "PUT",
      body: formData,
      headers: {
        ...(authRequired ? authHeader() : {}),
      },
    });
  }
}

export default HttpClient;
