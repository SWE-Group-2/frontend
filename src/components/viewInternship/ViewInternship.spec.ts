import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, test, vi } from "vitest";
import * as InternshipService from "@/services/Internship.service";
import { useViewInternship } from "@/components/viewInternship/ViewInternship.vue";

describe("Edit internship tests", () => {
  beforeEach(() => {
    const mockData = {
      id: 1,
      company: "Google",
      position: "Software Engineer",
      website: "https://google.com",
      deadline: "2024-03-24",
      time_period_id: 1,
      company_photo_link: "https://google.com/logo.png",
      flagged: false,
      created_at: "2024-03-24",
    };
    // Intercept calls to InternshipService's get internship by id and return mock data instead
    vi.spyOn(InternshipService, "getInternshipById").mockResolvedValue(
      mockData,
    );
  });
  test("Can mount", () => {
    const wrapper = mount(useViewInternship);
    expect(wrapper.exists()).toBe(true);
  });

  test("Internal state test", async () => {
    const internshipId = 1;
    const viewInternship = useViewInternship();
    expect(viewInternship.internship.value).toEqual({});

    await viewInternship.loadInternship(internshipId);
    expect(viewInternship.internship.value).toEqual({
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
});
