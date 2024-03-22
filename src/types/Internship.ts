export interface Internship {
  id: number;
  company: string;
  position: string;
  website: string;
  deadline: Date;
  author_id: number;
  time_period_id: number;
  company_photo_link: string | null;
  flagged: boolean;
  created_at: Date;
}