import { authHeader } from "@/services/AuthService.spec.js";

const baseUrl = "http://localhost:5000/users";

export async function registerUser(firstName, lastName, username, password) {
  const response = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      username: username,
      password: password,
    }),
  });

  if (response.status === 201) {
    return response.json();
  } else if (response.status === 409) {
    console.log("User already exists");
  }

  throw new Error("Failed to register user");
}

export async function loginUser(username, password) {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  if (response.status === 200) {
    return response.json();
  }

  throw new Error("Failed to login user");
}

export async function getUserInfo() {
  const response = await fetch(`${baseUrl}/get_current_user`, {
    method: "GET",
    headers: authHeader(),
  });

  if (response.status === 200) {
    return response.json();
  }

  throw new Error("Failed to get user info");
}

export async function getUserById(userId) {
  const response = await fetch(`${baseUrl}/${userId}`, {
    method: "GET",
    headers: authHeader(),
  });

  if (response.status === 200) {
    return response.json();
  } else if (response.status === 404) {
    throw new Error("User not found");
  } else if (response.status === 401) {
    throw new Error("Unauthorized");
  }

  throw new Error("Failed to get user by id");
}
