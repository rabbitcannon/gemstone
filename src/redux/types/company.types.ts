/* eslint-disable no-unused-vars */
export enum CompanyTypes {
  GET_USER_COMPANY = 'GET_USER_COMPANY',
  GET_USER_COMPANY_ERROR = 'GET_USER_COMPANY_ERROR'
}

export type Company = {
  isAuthenticated: boolean
  // TODO fix this any
  company: any
}

/* eslint-enable no-unused-vars */
