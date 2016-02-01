import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../redux'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import { browserHistory } from 'react-router'
import { syncHistory } from 'redux-simple-router'

const reduxRouterMiddleware = syncHistory(browserHistory)

const createStoreWithMiddleware = compose(
    applyMiddleware(reduxRouterMiddleware, thunkMiddleware)
)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)

    reduxRouterMiddleware.listenForReplays(store)

    return store;
}
