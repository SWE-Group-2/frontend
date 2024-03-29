import { UserRegistrationInfo } from "@/types/UserRegistrationInfo";
import { UserLoginInfo } from "@/types/UserLoginInfo";
import { User } from "@/types/User";
import { Profile } from "@/types/Profile";
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

export async function roleNameFromId(roleId: number): Promise<string> {
  switch (roleId) {
    case 1:
      return "Admin";
    case 2:
      return "Instructor";
    case 3:
      return "Student";
    default:
      throw new Error("Invalid role ID");
  }
}

export async function editProfile(
  userId: number,
  profile: Profile,
) {
  const profileJson = {
    gpa: profile.gpa,
    academic_year: profile.academic_year,
    github_link: profile.github_link,
    linkedin_link: profile.linkedin_link,
    website_link: profile.website_link,
    profile_picture_link: profile.profile_picture_link,
    email: profile.email,
    phone_number: profile.phone_number,
    description: profile.description,
    internship_time_period_id: profile.internship_time_period_id,
  };

  const response = await HttpClient.put(
    formatEndpoint(Endpoints.EDIT_PROFILE, { user_id: userId.toString() }),
    profileJson,
    true,
  );

  if (response.ok) {
    return response.json();
  }

  switch (response.status) {
    case 400:
      throw new Error("Invalid request body");
    case 401:
      throw new Error("Unauthorized");
    case 404:
      throw new Error("User not found");
    default:
      throw new Error("Failed to edit profile");
  }
}