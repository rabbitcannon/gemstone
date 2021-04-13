import {GET_CURRENT_USER, UserDispatchTypes, UserType} from "../types/user.types";

interface IDefaultUser {
    isAuthenticated: boolean
    loading: boolean
    profile?: UserType
}

const INITIAL_STATE: IDefaultUser = {
    isAuthenticated: false,
    loading: true,
    profile: undefined,
}

const userReducer = (state: IDefaultUser = INITIAL_STATE , action: UserDispatchTypes): IDefaultUser => {
    switch (action.type) {
        case GET_CURRENT_USER:
            return {
                ...state,
                loading: false,
                profile: action.payload
            }
        default:
            return state
    }
}

export default userReducer