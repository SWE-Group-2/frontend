export function setAuthToken(token) {
  localStorage.setItem("token", token);
}

export function getAuthToken() {
  return localStorage.getItem("token");
}

export function clearAuthToken() {
  localStorage.removeItem("token");
}

export function isLoggedIn() {
  return !!localStorage.getItem("token");
}

export function authHeader() {
  const token = getAuthToken();
  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}
