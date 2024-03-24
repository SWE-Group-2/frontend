// Login component tests

import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import { useLoginPage } from "@/components/login/Login.vue";

// Describe is a way to group tests in Vitest
describe("Login component tests", () => {
  // First test if component can mount successfully
  test("Can mount", () => {
    const wrapper = mount(useLoginPage());
    expect(wrapper.exists()).toBe(true);
  });

  // Next test initial state
  test("Initial state test", () => {
    const loginPage = useLoginPage();
    expect(loginPage.username.value).toBe("");
    expect(loginPage.password.value).toBe("");

    // Cannot really test state after event because... we are redirected to another page
    // In another component like ViewInternship, we can check state after loading the internship data
  });
});
