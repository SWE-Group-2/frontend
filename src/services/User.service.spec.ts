import { vi, describe, beforeEach, afterEach, test, expect } from "vitest";
import { loginUser } from "@/services/User.service";

describe("UserService tests", () => {
  // Going to have to mock fetch (make a fake fetch) since we can't send actual requests to backend
  function mockFetch(returnData: object) {
    // This basically replaces the fetch function with a fake fetch function
    global.fetch = vi
      .fn()
      .mockResolvedValue({ json: () => Promise.resolve(returnData) });
  }

  // If we wanted to test a backend call that returned something, we would mock the return value.
  // In this case login returns an auth token
  beforeEach(() => {
    mockFetch({ access_token: "fake_token" });
  });

  // Have to reset all mocks after each test
  afterEach(() => {
    vi.resetAllMocks();
  });

  // Now we can test calling the login function
  test("Can login user", async () => {
    const userInfo = {
      username: "test_user",
      password: "test_password",
    };

    // We are testing if the login function returns the auth token
    // Since we are using a fake fetch, we can't actually send a request to the backend
    // Gonna cause exception (that we can safely ignore)
    try {
      await loginUser(userInfo);
    } catch (e) {
      /* ignore */
    }

    // We can check if the (fake) fetch function was called with the correct arguments
    expect(fetch).toHaveBeenCalledWith("http://localhost:5000/users/login", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  });
});
