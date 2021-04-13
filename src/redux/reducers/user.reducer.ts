import {GET_CURRENT_USER, ProfileType, UserDispatchTypes, UserType} from "../types/user.types";

interface IDefaultUser {
    loading: boolean
    profile?: ProfileType
}

const INITIAL_STATE: IDefaultUser = {
    loading: true,
    // user: undefined,
}

const userReducer = (state: IDefaultUser = INITIAL_STATE , action: UserDispatchTypes): IDefaultUser => {
    switch (action.type) {
        case GET_CURRENT_USER:
            return {
                ...state,
                loading: false,
                // profile: action.payload
            }
        default:
            return state
    }
}

export default userReducer