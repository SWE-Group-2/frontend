import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import { useInternshipList } from "@/components/internshipList/InternshipList.vue";

describe("CreateInternship tests", () => {
  test("Can mount", () => {
    const wrapper = mount(useInternshipList());
    expect(wrapper.exists()).toBe(true);
  });

  test("Internal state test", async () => {
    const internshipList = useInternshipList();
    expect(internshipList.internships.value).toEqual([]);
    await internshipList.loadInternships();
    expect(internshipList.internships.value.length).toBeGreaterThan(0);
  });
});
