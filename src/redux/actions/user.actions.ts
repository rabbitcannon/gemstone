import { Dispatch } from 'redux'
import Axios from 'axios'
import { push } from 'connected-react-router'

import { UserTypes, User } from 'redux/types/user.types'
import { authPaths, urlPaths } from 'common/url-paths'

/*
Action Interfaces
 */
export interface LogInUser {
  type: UserTypes.LOGIN_USER
  payload: boolean
}

export interface LogoutUser {
  type: UserTypes.LOGOUT_USER
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
login the current user
 */
export const loginCurrentUser = () => {
  return async (dispatch: Dispatch) => {
    console.log('Test')
    try {
      dispatch({
        type: UserTypes.LOGIN_USER,
        payload: true
      })
    } catch (error) {
      dispatch({
        type: UserTypes.GET_USER_ERROR,
        payload: error.message
      })
    }
  }
}

export const logoutCurrentUser = () => {
  return async (dispatch: Dispatch<LogoutUser>) => {
    await Axios.get(authPaths.LOGOUT_URL).then((response) => {
      dispatch({
        type: UserTypes.LOGOUT_USER,
        payload: response.data
      })
    })
    // .catch((error) => {
    //   dispatch({
    //     type: UserTypes.GET_USER_ERROR,
    //     payload: error.message
    //   })
    // })
  }
}

/*
Get Current User Information
 */
export const getCurrentUser = () => {
  return async (dispatch: Dispatch<GetUserAction | any>) => {
    await Axios.get<User>(urlPaths.USER_URL)
      .then((response) => {
        dispatch({
          type: UserTypes.GET_USER,
          payload: response.data
        })
        dispatch(push('/'))
      })
      .catch((error) => {
        dispatch({
          type: UserTypes.GET_USER_ERROR,
          payload: error.message
        })
        dispatch(push('/login'))
      })
  }
}
