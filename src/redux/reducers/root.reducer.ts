import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

import companyReducer from './company.reducer'
import userReducer from './user.reducer'

// interface ApplicationState {
//   company: CompanyState
//   user: UserState
// }

const allReducers = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    company: companyReducer,
    user: userReducer
  })

export default allReducers
