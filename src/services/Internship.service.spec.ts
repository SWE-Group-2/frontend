import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import {
  editInternship,
  getAllInternships,
} from "@/services/Internship.service";
import { InternshipCreate } from "@/types/InternshipCreate";

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

  test("Can get internships", async () => {
    const internshipId = 1;
    const internshipData: InternshipCreate = {
      company: "Google",
      position: "Software Engineer",
      website: "https://google.com",
      deadline: "2024-03-24",
      timePeriodId: 1,
      companyPhotoLink: "https://google.com/logo.png",
    };
    const internshipJson = {
      company: internshipData.company,
      position: internshipData.position,
      website: internshipData.website,
      deadline: internshipData.deadline,
      time_period_id: internshipData.timePeriodId,
      company_photo_link: internshipData.companyPhotoLink,
    };
    try {
      await editInternship(internshipId, internshipData);
    } catch (e) {
      /* ignore */
    }
    expect(fetch).toHaveBeenCalledWith(
      `http://localhost:5000/internships/${internshipId}`,
      {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(internshipJson),
      },
    );
  });
});
