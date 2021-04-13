import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from 'redux-logger'
import thunk from "redux-thunk"

import rootReducer from '../reducers/rootReducer'

const middleware = [
    logger,
    thunk,
]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

// export type RootStore = ReturnType<typeof rootReducer>

export default store