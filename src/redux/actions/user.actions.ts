import { Dispatch } from "redux";
import Axios from "axios";

import { UserDispatchTypes, GET_USER, UserType } from '../types/user.types'
import { API_URL } from "../../common/filepaths";

/*
Get Current User Information
 */
export const getCurrentUser = () => async (dispatch: Dispatch<UserDispatchTypes> ) => {
    const result = await Axios.get<UserType>(API_URL + "user")
    console.log("Result: ", result)

    dispatch({
        type: GET_USER,
        payload: result.data
    })
}
