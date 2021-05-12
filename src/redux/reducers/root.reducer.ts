import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

import companyReducer from './company.reducer'
import userReducer from './user.reducer'

const allReducers = (history: History) =>
  combineReducers({
    company: companyReducer,
    router: connectRouter(history),
    user: userReducer
  })

export default allReducers

export type RootState = ReturnType<typeof allReducers>
