import { Dispatch } from "redux";
import Axios from "axios";

import { UserDispatchTypes, UserTypes, User } from '../types/user.types'
import { API_URL } from "../../common/filepaths";

/*
Action Interfaces
 */
export interface LogInUser {
    type: UserTypes.LOGIN_USER,
    payload: boolean
}

export interface GetUserAction {
    type: typeof UserTypes.GET_USER,
    payload: User
}

export interface GetUserErrorAction {
    type: typeof UserTypes.GET_USER_ERROR
    payload: string
}

/*
Login the current user
 */
export const loginCurrentUser = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: UserTypes.LOGIN_USER,
                payload: true
            })

            // window.location.href = "/dashboard"
        }
        catch (error) {
            dispatch({
                type: UserTypes.GET_USER_ERROR,
                payload: error.message
            })
        }

    }
}

/*
Get Current User Information
 */
export const getCurrentUser = () => {
    return async (dispatch: Dispatch<UserDispatchTypes> ) => {
        const result = await Axios.get<User>(API_URL + "user")

        try {
            dispatch({
                type: UserTypes.GET_USER,
                payload: result.data
            })
            // window.location.href = "/dashboard"
        }
        catch (error) {
            dispatch({
                type: UserTypes.GET_USER_ERROR,
                payload: error.message
            })
        }
    }
}
