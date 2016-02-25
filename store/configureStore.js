import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../redux'
import api from './api'

let middlewares = [ thunkMiddleware, api ]

if (process.env.NODE_ENV === 'production') {
    middlewares = [ ...middlewares, createLogger({collapsed: true}) ]
}

const createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../redux', () => {
            const nextRootReducer = require('../redux')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
}
