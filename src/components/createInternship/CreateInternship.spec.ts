import { mount } from '@vue/test-utils'
import { describe, test, expect } from "vitest";
import { useCreateInternship } from "@/components/createInternship/CreateInternship.vue";


describe('CreateInternship tests', () => {
    test('Can mount', () => {
        const wrapper = mount(useCreateInternship);
        expect(wrapper.exists()).toBe(true);
    });

    test("Internal state test", () => {
        const createInternship = useCreateInternship();
        expect(createInternship.company.value).toBe("");
        expect(createInternship.position.value).toBe("");
        expect(createInternship.website.value).toBe("");
        expect(createInternship.deadline.value).toBe("2024-01-01");
        expect(createInternship.timePeriodId.value).toBe(1);
        expect(createInternship.companyPhotoLink.value).toBe(null);
    });
});