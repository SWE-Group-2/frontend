import { authHeader } from "@/services/AuthService.spec";
import { UserRegistrationInfo } from "@/types/UserRegistrationInfo";
import { UserLoginInfo } from "@/types/UserLoginInfo";
import { User } from "@/types/User";

const baseUrl = "http://localhost:5000/users";

/**
 * Registers a new user.
 * @param userInfo the user registration information
 * @returns message indicating success
 * @throws error if the input is invalid, the username already exists, or the registration fails
 */
export async function registerUser(userInfo: UserRegistrationInfo) {
  const response = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name: userInfo.firstName,
      last_name: userInfo.lastName,
      username: userInfo.username,
      password: userInfo.password,
    }),
  });

  if (response.ok) {
    return response.json();
  }

  switch (response.status) {
    case 400:
      throw new Error("Invalid input");
    case 409:
      throw new Error("Username already exists");
    default:
      throw new Error("Failed to register user");
  }
}

/**
 * Logs in a user.
 * @param userInfo the user login information
 * @returns the authentication token
 * @throws error if the username or password is invalid, or the login fails
 */
export async function loginUser(userInfo: UserLoginInfo) {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: userInfo.username,
      password: userInfo.password,
    }),
  });

  if (response.ok) {
    return response.json();
  }

  switch (response.status) {
    case 401:
      throw new Error("Invalid username or password");
    default:
      throw new Error("Failed to login");
  }
}

/**
 * Gets the information of the currently logged-in user.
 * @returns the user information
 * @throws error if the user is not logged in, or the request fails
 */
export async function getUserInfo(): Promise<User> {
  const response = await fetch(`${baseUrl}/get_current_user`, {
    method: "GET",
    headers: authHeader(),
  });

  if (response.ok) {
    return response.json();
  }

  switch (response.status) {
    case 401:
      throw new Error("Not logged in");
    default:
      throw new Error("Failed to get user info");
  }
}

/**
 * Gets the information of a user by ID.
 * @param userId the ID of the user
 * @returns the user information
 * @throws error if the user is not found, the user is not logged in, or the request fails
 */
export async function getUserById(userId: number): Promise<User> {
  const response = await fetch(`${baseUrl}/${userId}`, {
    method: "GET",
    headers: authHeader(),
  });

  if (response.ok) {
    return response.json();
  }

  switch (response.status) {
    case 404:
      throw new Error("User not found");
    case 401:
      throw new Error("Unauthorized");
    default:
      throw new Error("Failed to get user");
  }
}
