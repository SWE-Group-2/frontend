import {afterEach, beforeEach, describe, expect, test, vi} from "vitest";
import {changeUserRole} from "@/services/AdminService";

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
});
