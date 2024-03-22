export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  gpa: number | null;
  academicYear: string | null;
  githubLink: string | null;
  linkedinLink: string | null;
  websiteLink: string | null;
  profilePictureLink: string | null;
  email: string | null;
  phoneNumber: string | null;
  description: string | null;
  roleId: number;
  internshipTimePeriodId: number | null;
}
