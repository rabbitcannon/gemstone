export const GET_CURRENT_USER = "GET_CURRENT_USER"

export type UserType = {
    profile: ProfileType;
}

export declare type ProfileType = {
    first_name: string
    last_name: string
}

export interface CurrentUser {
    type: typeof GET_CURRENT_USER,
    payload: UserType
}

export type UserDispatchTypes = CurrentUser