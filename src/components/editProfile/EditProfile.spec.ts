import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { useEditProfile } from "@/components/editProfile/EditProfile.vue";
import * as UserService from "@/services/User.service";

describe("Edit profile tests", () => {
    beforeEach(() => {
        const mockData = {
            id: 1,
            first_name: "Justin",
            last_name: "Copeland",
            password: "password",
            username: "justin.cop",
            gpa: 3.5,
            academic_year: "Senior",
            github_link: "https://github.com",
            linkedin_link: "https://linkedin.com",
            website_link: "https://website.com",
            profile_picture_link: "https://profile.com",
            cv_link: "https://cv.com",
            email: "justin.cop@gmail.com",
            phone_number: "1234567890",
            description: "I am Justin Copeland and I am very handsome.",
            role_id: 1,
            internship_time_period_id: 1,
        };
        // Intercept calls to UserService's get user by id and return mock data instead
        vi.spyOn(UserService, "getUserById").mockResolvedValue(
            mockData,
        );
    });
    test("Can mount", () => {
        const wrapper = mount(useEditProfile);
        expect(wrapper.exists()).toBe(true);
    });

    test("Internal state tests", async () => {
        const userId = 1;
        const editProfile = useEditProfile();
        expect(editProfile.gpa.value).toBe(null);
        expect(editProfile.academic_year.value).toBe(null);
        expect(editProfile.github_link.value).toBe(null);
        expect(editProfile.linkedin_link.value).toBe(null);
        expect(editProfile.website_link.value).toBe(null);
        expect(editProfile.profile_picture_link.value).toBe(null);
        expect(editProfile.cv_link.value).toBe(null);
        expect(editProfile.email.value).toBe(null);
        expect(editProfile.phone_number.value).toBe(null);
        expect(editProfile.description.value).toBe(null);
        expect(editProfile.internship_time_period_id.value).toBe(null);

        await editProfile.loadUser(userId);
        expect(editProfile.gpa.value).toBe(3.5);
        expect(editProfile.academic_year.value).toBe("Senior");
        expect(editProfile.github_link.value).toBe("https://github.com");
        expect(editProfile.linkedin_link.value).toBe("https://linkedin.com");
        expect(editProfile.website_link.value).toBe("https://website.com");
        expect(editProfile.profile_picture_link.value).toBe("https://profile.com");
        expect(editProfile.cv_link.value).toBe("https://cv.com");
        expect(editProfile.email.value).toBe("justin.cop@gmail.com");
        expect(editProfile.phone_number.value).toBe("1234567890");
        expect(editProfile.description.value).toBe("I am Justin Copeland and I am very handsome.");
        expect(editProfile.internship_time_period_id.value).toBe(1);
    });
});