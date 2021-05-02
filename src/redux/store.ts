import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import rootReducer from './reducers/root.reducer'

export const history = createBrowserHistory()

const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger')
  middleware.push(logger)
}

const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middleware))
)

export type RootStore = ReturnType<typeof rootReducer>

export default store
