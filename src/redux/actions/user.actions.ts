import { Dispatch } from 'redux'
import Axios from 'axios'
import { push } from 'connected-react-router'

import { UserTypes, User } from '../types/user.types'
import { API_URL } from '../../common/filepaths'

/*
Action Interfaces
 */
export interface LogInUser {
  type: UserTypes.LOGIN_USER
  payload: boolean
}

export interface GetUserAction {
  type: typeof UserTypes.GET_USER
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
        payload: true,
      })
      // window.location.href = "/dashboard"
    } catch (error) {
      dispatch({
        type: UserTypes.GET_USER_ERROR,
        payload: error.message,
      })
    }
  }
}

/*
Get Current User Information
 */
export const getCurrentUser = () => {
  return async (dispatch: Dispatch<GetUserAction | any>) => {
    const result = await Axios.get<User>(API_URL + 'user')

    console.log(result)

    try {
      dispatch({
        type: UserTypes.GET_USER,
        payload: result.data,
      })

      dispatch(push('/dashboard'))
    } catch (error) {
      console.log('Error:', error)
      dispatch({
        type: UserTypes.GET_USER_ERROR,
        payload: error.message,
      })
      dispatch(push('/login'))
    }
  }
}
