import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import FastClick from 'fastclick'
import { App } from './components'
import { Home, Repos } from './pages'

FastClick.attach(document.body)

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const childRoutes = [{
    path: 'repos/:username',
    component: Repos
}, {
    path: 'about',
    component: () => <h1>About</h1>
}, {
    path: '*',
    component: () => <h1>Not found</h1>
}]

const routes = {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes
}

render(
    <Provider store={store}>
        <Router routes={routes} history={history} />
    </Provider>,
    document.getElementById('app')
)
