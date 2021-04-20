export enum UserTypes {
    LOGIN_USER = "LOGIN_USER",
    GET_USER = "GET_USER",
    GET_USER_ERROR = "GET_USER_ERROR"
}

export type User = {
    isAuthenticated: boolean
    user: {
        profile: {
            first_name: string
            last_name: string
        }
    }
}

export declare type isAuthenticated = {
    type: boolean
}

export interface CurrentUser {
    type: typeof UserTypes.LOGIN_USER | UserTypes.GET_USER | UserTypes.GET_USER_ERROR,
    payload: User
}

export type UserDispatchTypes = CurrentUser