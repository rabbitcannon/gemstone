import {
    GET_USER,
    UserDispatchTypes,
    UserType
} from "../types/user.types";

interface IDefaultUser {
    isAuthenticated: boolean
    loading: boolean
    error: string | null
    profile?: UserType
}

const INITIAL_STATE: IDefaultUser = {
    isAuthenticated: false,
    loading: true,
    error: null,
    profile: undefined,
}

// interface IAction {
//     type: string
//     payload?: UserType
// }

const userReducer = (state: IDefaultUser = INITIAL_STATE , action: UserDispatchTypes): IDefaultUser => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                loading: false,
                profile: action.payload
            }

        // case GET_USER_ERROR:
        //     return {
        //         loading: false,
        //         error: action.payload
        //     }
        default:
            return state
    }
}

export default userReducer