export interface InternshipCreate {
    company: string;
    position: string;
    website: string;
    deadline: Date;
    time_period_id: number;
    company_photo_link: string | null;
}
