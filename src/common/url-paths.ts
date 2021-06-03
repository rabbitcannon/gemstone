/* eslint-disable no-unused-vars */
export enum authPaths {
  CSRF_COOKIE_URL = 'http://portal.test/api/sanctum/csrf-cookie',
  LOGIN_URL = 'http://portal.test/api/quartz/login',
  LOGOUT_URL = 'http://portal.test/api/quartz/logout'
}

export enum urlPaths {
  USER_URL = 'http://portal.test/api/quartz/user',
  API_URL = 'http://portal.test/api/quartz/'
}

export enum companyPaths {
  USER_COMPANY = 'http://portal.test/api/quartz/user/company'
}
/* eslint-enable no-unused-vars */
