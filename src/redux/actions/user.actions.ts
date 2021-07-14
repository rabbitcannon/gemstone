import { Dispatch } from 'redux'
import Axios from 'axios'
import { push } from 'connected-react-router'

import { UserTypes, User } from 'redux/types/user.types'
import { userPaths } from 'common/url-paths'
// import { authPaths, userPaths } from 'common/url-paths'

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

/*
logout the current user
 */
// export const logoutCurrentUser = () => {
//   return async (dispatch: Dispatch<LogoutUser | any>) => {
//     console.log('working?')
//
//     await Axios.post(authPaths.LOGOUT_URL)
//       .then((response) => {
//         console.log(response)
//         dispatch({
//           type: UserTypes.LOGOUT_USER,
//           payload: response.data
//         })
//         dispatch(push('/login'))
//       })
//       .catch((error) => {
//         console.log(error)
//         dispatch({
//           type: UserTypes.GET_USER_ERROR,
//           payload: error.message
//         })
//         dispatch(push('/login'))
//       })
//   }
// }

/*
Get Current User Information
 */
export const getCurrentUser = () => {
  return async (dispatch: Dispatch<GetUserAction | any>) => {
    await Axios.get<User>(userPaths.USER_URL)
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
