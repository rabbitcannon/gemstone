const BASE_API_URL = process.env.REACT_APP_BASE_API_URL
const BASE_BEDROCK_URL = process.env.REACT_APP_BEDROCK_API_URL

/* eslint-disable no-unused-vars */
export const authPaths = {
  CSRF_COOKIE_URL: BASE_API_URL + 'sanctum/csrf-cookie',
  LOGIN_URL: BASE_BEDROCK_URL + 'login',
  LOGOUT_URL: BASE_BEDROCK_URL + 'logout'
}

export const userPaths = {
  USER_URL: BASE_BEDROCK_URL + 'user',
  PROFILE_URL: BASE_BEDROCK_URL + 'profile'
}

export const companyPaths = {
  USER_COMPANY: BASE_BEDROCK_URL + 'user/company'
}
/* eslint-enable no-unused-vars */
