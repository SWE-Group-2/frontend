import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { useEditInternship } from "@/components/editInternship/EditInternship.vue";
import * as InternshipService from "@/services/Internship.service";

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
    const wrapper = mount(useEditInternship);
    expect(wrapper.exists()).toBe(true);
  });

  test("Internal state test", async () => {
    const internshipId = 1;
    const editInternship = useEditInternship();
    expect(editInternship.company.value).toBe("");
    expect(editInternship.position.value).toBe("");
    expect(editInternship.website.value).toBe("");
    expect(editInternship.deadline.value).toBe("");
    expect(editInternship.timePeriodId.value).toBe(1);
    expect(editInternship.companyPhotoLink.value).toBe(null);

    await editInternship.loadInternship(internshipId);
    expect(editInternship.company.value).toBe("Google");
    expect(editInternship.position.value).toBe("Software Engineer");
    expect(editInternship.website.value).toBe("https://google.com");
    expect(editInternship.deadline.value).toBe("2024-03-24");
    expect(editInternship.timePeriodId.value).toBe(1);
    expect(editInternship.companyPhotoLink.value).toBe(
      "https://google.com/logo.png",
    );
  });
});
