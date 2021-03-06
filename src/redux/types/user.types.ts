/* eslint-disable no-unused-vars */
export enum UserTypes {
  LOGIN_USER = 'LOGIN_USER',
  LOGOUT_USER = 'LOGOUT_USER',
  GET_USER = 'GET_USER',
  GET_USER_ERROR = 'GET_USER_ERROR'
}

export type User = {
  isAuthenticated: boolean
  user: {
    profile: { first_name: string; last_name: string }
  }
}
/* eslint-enable no-unused-vars */

export declare type isAuthenticated = {
  type: boolean
}

export interface CurrentUser {
  type:
    | typeof UserTypes.LOGIN_USER
    | typeof UserTypes.LOGOUT_USER
    | UserTypes.GET_USER
    | UserTypes.GET_USER_ERROR
  payload: User
}

export type UserDispatchTypes = CurrentUser
