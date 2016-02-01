import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { DevTools } from './'

const Root = ({ store, history, routes }) =>
    <div>
        <Provider store={store}>
            <div>
                <Router routes={routes} history={history} />
                <DevTools />
            </div>
        </Provider>
    </div>;

export default Root
