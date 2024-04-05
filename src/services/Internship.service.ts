import {Endpoints} from "@/constants/endpoints";
import HttpClient from "@/services/HttpClient";
import {InternshipCreate} from "@/types/InternshipCreate";
import formatEndpoint from "@/utils/formatEndpoint";

/**
 * Creates a new internship.
 * @param internship the information of the internship
 * @returns success message
 * @throws error if the request body is invalid, the user is unauthorized, or the creation fails
 */
export async function createInternship(internship: InternshipCreate) {
    const internshipJson = {
        company: internship.company,
        position: internship.position,
        website: internship.website,
        deadline: internship.deadline,
        time_period_id: internship.timePeriodId,
        company_photo_link: internship.companyPhotoLink,
    };

    const response = await HttpClient.post(
        Endpoints.CREATE_INTERNSHIP,
        internshipJson,
        true,
    );

    if (response.ok) {
        return response.json();
    }

    switch (response.status) {
        case 400:
            alert("Invalid request body");
            break;
        case 401:
            alert("Unauthorized");
            break;
        default:
            alert("Failed to create internship");
    }
}

export async function editInternship(
    internshipId: number,
    internship: InternshipCreate,
) {
    const internshipJson = {
        company: internship.company,
        position: internship.position,
        website: internship.website,
        deadline: internship.deadline,
        time_period_id: internship.timePeriodId,
        company_photo_link: internship.companyPhotoLink,
    };

    const response = await HttpClient.put(
        formatEndpoint(Endpoints.INTERNSHIP_BY_ID, {
            internship_id: internshipId.toString(),
        }),
        internshipJson,
        true,
    );

    if (response.ok) {
        return response.json();
    }

    switch (response.status) {
        case 400:
            alert("Invalid request body");
            break;
        case 401:
            alert("Unauthorized");
            break;
        case 404:
            alert("Internship not found");
            break;
        default:
            alert("Failed to edit internship");
    }
}

export async function getAllInternships() {
    const response = await HttpClient.get(Endpoints.GET_ALL_INTERNSHIPS);

    if (response.ok) {
        return response.json();
    } else {
        alert("Failed to get internships");
    }
}

export async function getInternshipById(internshipId: number) {
    const response = await HttpClient.get(
        formatEndpoint(Endpoints.INTERNSHIP_BY_ID, {
            internship_id: internshipId.toString(),
        }),
    );

    if (response.ok) {
        return response.json();
    } else if (response.status === 404) {
        alert("Internship not found");
    } else {
        alert("Failed to get internship");
    }

}

export async function getInternshipByAuthorId(authorId: number) {
    const response = await HttpClient.get(
        formatEndpoint(Endpoints.INTERNSHIP_BY_AUTHOR, {
            user_id: authorId.toString(),
        }),
    );

    if (response.ok) {
        return response.json();
    }
    if (response.status === 404) {
        alert("Internships not found");
    } else {
        alert("Failed to get internships");
    }

}

export async function deleteInternshipById(internshipId: number) {
    const response = await HttpClient.delete(
        formatEndpoint(Endpoints.INTERNSHIP_BY_ID, {
            internship_id: internshipId.toString(),
        }),
        true,
    );

    if (response.ok) {
        return response.json();
    }

    switch (response.status) {
        case 401:
            alert("Unauthorized");
            break;
        case 404:
            alert("Internship not found");
            break;
        default:
            alert("Failed to delete internship");
    }
}

export async function uploadInternshipPhoto(internshipId: number, file: File) {
    const response = await HttpClient.putFile(
        Endpoints.UPLOAD_COMPANY_PICTURE,
        file,
        true,
        {internship_id: internshipId},
    );

    if (response.ok) {
        return response.json();
    }

    switch (response.status) {
        case 400:
            alert("Invalid file");
            break;
        case 401:
            alert("Unauthorized");
            break;
        case 404:
            alert("Internship not found");
            break;
        default:
            alert("Failed to upload photo");
    }
}