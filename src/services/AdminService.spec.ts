import {afterEach, beforeEach, describe, expect, test, vi} from "vitest";
import {changeUserRole, createTimePeriod, deleteTimePeriodById} from "@/services/AdminService";

describe("Admin service tests", () => {
    function mockFetch(returnData: object) {
        global.fetch = vi
            .fn()
            .mockResolvedValue({json: () => Promise.resolve(returnData)});
    }

    beforeEach(() => {
        mockFetch({});

    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    test("can create time period", async () => {
        const timePeriodData = { name: "name", start_date: "start_date", end_date: "end_date" };
        try {
            await createTimePeriod(timePeriodData);
        } catch (e) {
            /* ignore */
        }
        expect(fetch).toHaveBeenCalledWith(
            `http://localhost:5000/admin/add_time_period`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(timePeriodData),
                method: "POST",
            },
        );
    });

    test("can change user role", async () => {
        try {
            await changeUserRole("username", 1);
        } catch (e) {
            /* ignore */
        }
        expect(fetch).toHaveBeenCalledWith(
            `http://localhost:5000/admin/change_role/username`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                body: '{"role_id":1}',
                method: "PUT",
            },
        );
    });

    test("Can delete time period by id", async () => {
        const timePeriodId = 1;
        try {
            await deleteTimePeriodById(timePeriodId);
        } catch (e) {
            /* ignore */
        }
        expect(fetch).toHaveBeenCalledWith(
            `http://localhost:5000/admin/delete_time_period/${timePeriodId}`,
            {
                headers: {},
                method: "DELETE",
            },
        );
    });
});
