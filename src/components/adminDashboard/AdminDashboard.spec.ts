import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import { useAdminDashboard } from "@/components/adminDashboard/AdminDashboard.vue";

describe("Admin dashboard tests", () => {
  test("Can mount", () => {
    const wrapper = mount(useAdminDashboard);
    expect(wrapper.exists()).toBe(true);
  });

  test("Internal state test", () => {
    const adminPage = useAdminDashboard();
    expect(adminPage.createTimePeriodName.value).toBe("");
    expect(adminPage.createTimePeriodStartDate.value).toBe("");
    expect(adminPage.createTimePeriodEndDate.value).toBe("");
    expect(adminPage.roleChangeRoleId.value).toBe(0);
    expect(adminPage.roleChangeUsername.value).toBe("");
  });
});
