import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, test, vi } from "vitest";
import * as UserService from "@/services/User.service";
import { useViewProfile } from "@/components/viewProfile/ViewProfile.vue";

describe("Edit profile tests", () => {
    beforeEach(() => {
        const mockData = {
            id: 1,
            first_name: "Justin",
            last_name: "Copeland",
            username: "justin",
            password: "justinpassword",
            gpa: 4.0,
            academic_year: "Senior",
            github_link: "github.com/justin.cop",
            linkedin_link: "linkedin.com/justin.cop",
            website_link: "justincopeland.io",
            profile_picture_link: "justincopeland.io/profile.png",
            email: "justin.cop@gmail.com",
            phone_number: "123-456-7890",
            description: "I am Justin Copeland and I am very handsome.",
            role_id: 1,
            internship_time_period_id: 1,
        };
        // Intercept calls to StudentService's get user by id and return mock data instead
        vi.spyOn(UserService, "getUserById").mockResolvedValue(
            mockData,
        );
    });

    test("Can mount", () => {
        const wrapper = mount(useViewProfile);
        expect(wrapper.exists()).toBe(true);
    });

    test("Internal state test", async () => {
        const userId = 1;
        const viewProfile = useViewProfile();
        expect(viewProfile.user.value).toEqual({});

        await viewProfile.loadUser(userId);
        expect(viewProfile.user.value).toEqual({
            id: 1,
            firstName: "Justin",
            lastName: "Copeland",
            username: "justin",
            password: "justinpassword",
            gpa: 4.0,
            academicYear: "Senior",
            githubLink: "github.com/justin.cop",
            linkedinLink: "linkedin.com/justin.cop",
            websiteLink: "justincopeland.io",
            profilePictureLink: "justincopeland.io/profile.png",
            email: "justin.cop@gmail.com",
            phoneNumber: "123-456-7890",
            description: "I am Justin Copeland and I am very handsome.",
            roleId: 1,
            internshipTimePeriodId: 1,
        });
    });
});