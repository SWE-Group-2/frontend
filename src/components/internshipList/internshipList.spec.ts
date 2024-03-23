import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, test, vi } from "vitest";
import * as InternshipService from "@/services/Internship.service";
import { useInternshipList } from "@/components/internshipList/InternshipList.vue";

describe("CreateInternship tests", () => {
  beforeEach(() => {
    const mockData = [
      {
        id: 1,
        company: "Google",
        position: "Software Engineer",
        website: "https://google.com",
        deadline: "2024-03-24",
        time_period_id: 1,
        company_photo_link: "https://google.com/logo.png",
        flagged: false,
        created_at: "2024-03-24",
      },
    ];

    // Intercept calls to InternshipService's get all internships and return mock data instead
    vi.spyOn(InternshipService, "getAllInternships").mockResolvedValue(
      mockData,
    );
  });

  test("Can mount", () => {
    const wrapper = mount(useInternshipList());
    expect(wrapper.exists()).toBe(true);
  });

  test("Internal state test", async () => {
    // Before loading internships, the list should be empty
    const internshipList = useInternshipList();
    expect(internshipList.internships.value).toEqual([]);

    // After loading internships, the list should not be empty
    await internshipList.loadInternships();
    expect(internshipList.internships.value.length).toBeGreaterThan(0);
  });
});
