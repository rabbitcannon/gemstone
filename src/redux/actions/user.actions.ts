import { Dispatch } from "redux";
import Axios from "axios";

import { UserDispatchTypes, GET_CURRENT_USER, UserType } from '../types/user.types'
import { API_URL } from "../../common/filepaths";

/*
Get Current User Information
 */
export const getCurrentUser = () => async (dispatch: Dispatch<UserDispatchTypes> ) => {
    const result = await Axios.get<UserType>(API_URL + "user")

    dispatch({
        type: GET_CURRENT_USER,
        payload: result.data
    })
}
