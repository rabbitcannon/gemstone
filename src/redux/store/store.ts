import { compose, createStore, applyMiddleware } from "redux"
import logger from 'redux-logger'
import thunk from "redux-thunk"

import rootReducer from '../reducers/rootReducer'

const middleware = [
    logger,
    thunk,
]

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)))

// export type RootStore = ReturnType<typeof rootReducer>

export default store