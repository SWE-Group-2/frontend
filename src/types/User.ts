export interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  gpa: number | null;
  academic_year: string | null;
  github_link: string | null;
  linkedin_link: string | null;
  website_link: string | null;
  profile_picture_link: string | null;
  email: string | null;
  phone_number: string | null;
  description: string | null;
  role_id: number;
  internship_time_period_id: number | null;
}
