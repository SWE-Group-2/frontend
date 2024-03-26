export enum Endpoints {
  GET_ALL_USERS = "/users",
  GET_ALL_STUDENTS = "/users/students",
  REGISTER = "/users/register",
  LOGIN = "/users/login",
  GET_CURRENT_USER = "/users/get_current_user",
  GET_USER_BY_ID = "/users/{user_id}",
  INTERNSHIP_BY_ID = "/internships/{internship_id}",
  GET_ALL_INTERNSHIPS = "/internships",
  CREATE_INTERNSHIP = "/internships/add_internship",
  GET_TIME_PERIODS = "/time_periods",
  GET_ALL_TIME_PERIODS = "/time_periods/all",
  CREATE_TIME_PERIOD = "/admin/add_time_period",
}
