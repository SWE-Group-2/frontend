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

  if (response.status === 400) {
    alert("Invalid input");
  } else if (response.status === 409) {
    alert("Username already exists");
  } else {
    alert("Failed to register user");
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
    alert("Invalid username or password");
  } else {
    alert("Failed to log in");
  }
}

export async function loginUserWithGoogle(userInfo: UserRegistrationInfo) {
    const response = await HttpClient.post(Endpoints.LOGIN_GOOGLE, userInfo);

    if (response.ok) {
        return response.json();
    }

    if (response.status === 401) {
        alert("Invalid Google token");
    } else {
      alert("Failed to log in with Google");
    }

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
      alert("User not found");
      break;
    case 401:
      alert("Unauthorized");
      break;
    default:
      alert("Failed to get user");
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
  const response = await HttpClient.put(
    formatEndpoint(Endpoints.EDIT_PROFILE, { user_id: userId.toString() }),
    profile,
    true,
  );

  if (response.ok) {
    return response.json();
  }

  switch (response.status) {
    case 400:
      alert("Invalid request body");
      break;
    case 401:
      alert("Unauthorized");
      break;
    case 404:
      alert("User not found");
      break;
    default:
      alert("Failed to edit profile");
  }
}

export async function uploadProfilePicture(file: File) {
  const response = await HttpClient.putFile(Endpoints.UPLOAD_PROFILE_PICTURE, file, true);

  if (response.ok) {
    return response.json();
  }

  switch (response.status) {
    case 400:
      alert("Invalid file");
      break;
    case 401:
      alert("Unauthorized");
      break;
    default:
      alert("Failed to upload profile picture");
  }
}

export async function clearProfilePicture() {
  const response = await HttpClient.delete(Endpoints.DELETE_PROFILE_PIC, true);

  if (response.ok) {
    return response.json();
  }

  if (response.status === 401) {
    alert("Unauthorized");
  } else {
    alert("Failed to clear profile picture");
  }

}

export async function uploadCv(file: File) {
  const response = await HttpClient.putFile(Endpoints.UPLOAD_CV, file, true);

  if (response.ok) {
    return response.json();
  }

  switch (response.status) {
    case 400:
      alert("Invalid file");
      break;
    case 401:
      alert("Unauthorized");
      break;
    default:
      alert("Failed to upload CV");
  }
}

export async function clearCv() {
  const response = await HttpClient.delete(Endpoints.DELETE_CV, true);

  if (response.ok) {
    return response.json();
  }

  if (response.status === 401) {
    alert("Unauthorized");
  } else {
    alert("Failed to clear CV");
  }
}
