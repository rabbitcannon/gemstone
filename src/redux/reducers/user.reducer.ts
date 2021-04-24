import { User, UserTypes } from '../types/user.types'
import {
  GetUserAction,
  GetUserErrorAction,
  LogInUser
} from '../actions/user.actions'

type UserActions = LogInUser | GetUserAction | GetUserErrorAction

interface IDefaultUser {
  isAuthenticated: boolean
  loading: boolean
  error: string | null
  profile?: User
}

const INITIAL_STATE: IDefaultUser = {
  isAuthenticated: false,
  loading: true,
  error: null,
  profile: undefined
}

const userReducer = (
  state: IDefaultUser = INITIAL_STATE,
  action: UserActions
): IDefaultUser => {
  switch (action.type) {
    case UserTypes.LOGIN_USER:
      return {
        ...state,
        isAuthenticated: action.payload
      }

    case UserTypes.GET_USER:
      return {
        ...state,
        loading: false,
        profile: action.payload
      }

    case UserTypes.GET_USER_ERROR:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}

export default userReducer
