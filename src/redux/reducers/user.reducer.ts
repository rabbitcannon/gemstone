import { User, UserTypes } from '../types/user.types'
import { GetUserAction, GetUserErrorAction, LogInUser, LogoutUser } from '../actions/user.actions'

type UserActions = LogInUser | LogoutUser | GetUserAction | GetUserErrorAction

interface UserState {
  isAuthenticated: boolean
  token: string | null
  loading: boolean
  error: string | null
  profile?: User
}

const INITIAL_STATE: UserState = {
  isAuthenticated: false,
  token: null,
  loading: true,
  error: null,
  profile: undefined
}

const userReducer = (state: UserState = INITIAL_STATE, action: UserActions): UserState => {
  switch (action.type) {
    case UserTypes.LOGIN_USER:
      console.log('State', state)
      return {
        ...state,
        isAuthenticated: action.payload
      }

    case UserTypes.GET_USER:
      return {
        ...state,
        loading: false,
        profile: action.payload,
        isAuthenticated: true
      }

    case UserTypes.GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        isAuthenticated: false
      }

    case UserTypes.LOGOUT_USER:
      return {
        ...state,
        loading: true,
        isAuthenticated: false
      }

    default:
      return state
  }
}

export default userReducer
