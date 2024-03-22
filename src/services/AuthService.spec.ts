/**
 * Set the authentication token in local storage.
 * @param token the authentication token
 */
export function setAuthToken(token: string): void {
  localStorage.setItem("token", token);
}

/**
 * Get the authentication token from local storage.
 * @returns the authentication token
 */
export function getAuthToken(): string {
  return localStorage.getItem("token");
}

/**
 * Remove the authentication token from local storage.
 */
export function clearAuthToken(): void {
  localStorage.removeItem("token");
}

/**
 * Check if the user is logged in by checking if the authentication token exists in local storage.
 * @returns true if the user is logged in, false otherwise
 */
export function isLoggedIn(): boolean {
  return !!localStorage.getItem("token");
}

/**
 * Get the authentication header to be used in API requests.
 * @returns an object with the Authorization header if the user is logged in, an empty object otherwise
 */
export function authHeader(): Record<string, string> {
  const token = getAuthToken();
  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}
