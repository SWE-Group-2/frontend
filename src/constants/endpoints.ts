export enum Endpoints {
  GET_ALL_USERS = "/users",
  GET_ALL_STUDENTS = "/users/students",
  REGISTER = "/users/register",
  LOGIN = "/users/login",
  LOGIN_GOOGLE = "/users/google/login",
  GET_CURRENT_USER = "/users/get_current_user",
  GET_USER_BY_ID = "/users/{user_id}",
  INTERNSHIP_BY_ID = "/internships/{internship_id}",
  INTERNSHIP_BY_AUTHOR = "/internships/by_user/{user_id}",
  GET_ALL_INTERNSHIPS = "/internships",
  CREATE_INTERNSHIP = "/internships/add_internship",
  GET_TIME_PERIODS = "/time_periods",
  GET_ALL_TIME_PERIODS = "/time_periods/all",
  CREATE_TIME_PERIOD = "/admin/add_time_period",
  CHANGE_USER_ROLE = "/admin/change_role/{username}",
  DELETE_TIME_PERIOD_BY_ID = "/admin/delete_time_period/{time_period_id}",
  EDIT_PROFILE = "/users/edit_profile",
  DELETE_USER = "/admin/delete_user/{user_id}",
  UPLOAD_PROFILE_PICTURE = "/upload_profilepic",
  DELETE_PROFILE_PIC = "/delete_profilepic",
  UPLOAD_CV = "/upload_cv",
  DELETE_CV = "/delete_cv",
  UPLOAD_COMPANY_PICTURE = "/upload_companypic",
}
