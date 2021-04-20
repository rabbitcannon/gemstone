// export const USER_AUTHENTICATED = "USER_AUTHENTICATED"
export const GET_USER = "GET_USER"
// export const GET_USER_ERROR = "GET_USER_ERROR"

export type UserType = {
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
    type: typeof GET_USER,
    payload: UserType
}

export type UserDispatchTypes = CurrentUser