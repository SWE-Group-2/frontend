import { UserRegistrationInfo } from "@/types/UserRegistrationInfo";
import { UserLoginInfo } from "@/types/UserLoginInfo";
import { User } from "@/types/User";
import HttpClient from "@/services/HttpClient";
import { Endpoints } from "@/constants/endpoints";
import formatEndpoint from "@/utils/formatEndpoint";

/**
 * Registers a new user.
 * @param userInfo the user registration information
 * @returns message indicating success
 * @throws error if the input is invalid, the username already exists, or the registration fails
 */
export async function registerUser(userInfo: UserRegistrationInfo) {
  // Conform with the backend's expected JSON format
  const userJson = {
    first_name: userInfo.first_name,
    last_name: userInfo.last_name,
    username: userInfo.username,
    password: userInfo.password,
  };

  const response = await HttpClient.post(Endpoints.REGISTER, userJson);

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
  const response = await HttpClient.post(Endpoints.LOGIN, userInfo);

  if (response.ok) {
    return response.json();
  }

  if (response.status === 401) {
    throw new Error("Invalid username or password");
  }

  throw new Error("Failed to log in");
}

/**
 * Gets the information of the currently logged-in user.
 * @returns the user information
 * @throws error if the user is not logged in, or the request fails
 */
export async function getUserInfo() {
  const response = await HttpClient.get(Endpoints.GET_CURRENT_USER, true);

  if (response.ok) {
    return response.json();
  }

  if (response.status === 401) {
    throw new Error("Not logged in");
  }

  throw new Error("Failed to get user info");
}

/**
 * Gets the information of a user by ID.
 * @param userId the ID of the user
 * @returns the user information
 * @throws error if the user is not found, the user is not logged in, or the request fails
 */
export async function getUserById(userId: number): Promise<User> {
  const response = await HttpClient.get(
    formatEndpoint(Endpoints.GET_USER_BY_ID, { user_id: userId.toString() }),
    true,
  );

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
