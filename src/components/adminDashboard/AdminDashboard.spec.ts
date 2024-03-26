import {mount} from "@vue/test-utils";
import {vi, describe, test, expect, beforeEach} from "vitest";
import {useAdminDashboard} from "@/components/adminDashboard/AdminDashboard.vue";
import * as TimePeriodService from "@/services/TimePeriod.service";

describe("Admin dashboard tests", () => {
    test("Can mount", () => {
        const wrapper = mount(useAdminDashboard);
        expect(wrapper.exists()).toBe(true);
    });

    beforeEach(() => {
        vi.spyOn(TimePeriodService, "getAllTimePeriods").mockResolvedValue([{
            id: 1,
            name: "T3 2023-2024",
            start_date: "2024-04-22",
            end_date: "2024-07-21"
        }]);
    });

    test("Internal state test", async () => {
        const adminPage = useAdminDashboard();
        expect(adminPage.timePeriods.value).toEqual([]);
        expect(adminPage.createTimePeriodName.value).toBe("");
        expect(adminPage.createTimePeriodStartDate.value).toBe("");
        expect(adminPage.createTimePeriodEndDate.value).toBe("");
        expect(adminPage.roleChangeUsername.value).toBe("");
        expect(adminPage.roleChangeRoleId.value).toBe(0);

        await adminPage.loadTimePeriods();
        expect(adminPage.timePeriods.value).toEqual([{
            id: 1,
            name: "T3 2023-2024",
            start_date: "2024-04-22",
            end_date: "2024-07-21"
        }]);
    });
});
