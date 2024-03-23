import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { getAllInternships } from "@/services/Internship.service";

describe("Internship service tests", () => {
  function mockFetch(returnData: object) {
    global.fetch = vi
      .fn()
      .mockResolvedValue({ json: () => Promise.resolve(returnData) });
  }

  beforeEach(() => {
    mockFetch({
      id: 1,
      company: "Google",
      position: "Software Engineer",
      website: "https://google.com",
      deadline: "2024-03-24",
      time_period_id: 1,
      company_photo_link: "https://google.com/logo.png",
      flagged: false,
      created_at: "2024-03-24",
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test("Can get internships", async () => {
    try {
      await getAllInternships();
    } catch (e) {
      /* ignore */
    }
    expect(fetch).toHaveBeenCalledWith("http://localhost:5000/internships", {
      headers: {},
    });
  });
});
