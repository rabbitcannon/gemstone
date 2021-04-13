export const USER_AUTHENTICATED = "USER_AUTHENTICATED"
export const GET_CURRENT_USER = "GET_CURRENT_USER"

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
    type: typeof GET_CURRENT_USER,
    payload: UserType
}

export type UserDispatchTypes = CurrentUser