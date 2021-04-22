import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import rootReducer from './reducers/rootReducer'

export const history = createBrowserHistory()

const middleware = [logger, thunk, routerMiddleware(history)]

const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middleware))
)

// export type RootStore = ReturnType<typeof rootReducer>

export default store
