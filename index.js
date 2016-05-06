import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import FastClick from 'fastclick'
import routes from './routes'
import configureStore from './store/configureStore'

FastClick.attach(document.body)

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <Router routes={routes} history={history} />
    </Provider>,
    document.getElementById('app')
)
