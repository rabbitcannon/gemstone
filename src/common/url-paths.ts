const baseURL = process.env.REACT_APP_BEDROCK_URL

/* eslint-disable no-unused-vars */
export const authPaths = {
  CSRF_COOKIE_URL: 'http://portal.test/api/sanctum/csrf-cookie',
  LOGIN_URL: baseURL + 'login',
  LOGOUT_URL: baseURL + 'logout'
}

export const userPaths = {
  USER_URL: baseURL + 'user'
}

export const companyPaths = {
  USER_COMPANY: 'http://portal.test/api/quartz/user/company'
}
/* eslint-enable no-unused-vars */
