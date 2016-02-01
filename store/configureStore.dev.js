import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../redux'
import DevTools from '../components/DevTools'
import { persistState } from 'redux-devtools'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import { browserHistory } from 'react-router'
import { syncHistory } from 'redux-simple-router'

const reduxRouterMiddleware = syncHistory(browserHistory)

const createStoreWithMiddleware = compose(
    applyMiddleware(reduxRouterMiddleware, thunkMiddleware, createLogger({collapsed: true})),
    DevTools.instrument(),
    persistState(getDebugSessionKey())
)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)

    reduxRouterMiddleware.listenForReplays(store)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../redux', () => {
            const nextRootReducer = require('../redux')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
}

function getDebugSessionKey() {
    const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    return (matches && matches.length > 0)? matches[1] : null;
}
