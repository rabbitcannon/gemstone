import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as UserActionCreators from "../actions/user.actions"

export const useUserAction = () => {
  const dispatch = useDispatch()

  return bindActionCreators(UserActionCreators, dispatch)
}
