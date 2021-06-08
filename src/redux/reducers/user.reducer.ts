import { User, UserTypes } from '../types/user.types'
import { GetUserAction, GetUserErrorAction, LogInUser } from '../actions/user.actions'

type UserActions = LogInUser | GetUserAction | GetUserErrorAction

interface UserState {
  isAuthenticated: boolean
  loading: boolean
  error: string | null
  profile?: User
}

const INITIAL_STATE: UserState = {
  isAuthenticated: false,
  loading: true,
  error: null,
  profile: undefined
}

const userReducer = (state: UserState = INITIAL_STATE, action: UserActions): UserState => {
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
        profile: action.payload,
        isAuthenticated: true
      }

    case UserTypes.GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        isAuthenticated: false
      }

    default:
      return state
  }
}

export default userReducer
