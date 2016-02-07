import configureStore from './store/configureStore'
import FastClick from 'fastclick'
import { browserHistory } from 'react-router'
import { Root, App } from './components'

import { Home } from './pages'

FastClick.attach(document.body)

const reduxStore = configureStore()

const childRoutes = [{
    path: '*',
    component: () => <h1>Not found</h1>
}]

const routes = {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: childRoutes
}

ReactDOM.render(
    <Root store={reduxStore} routes={routes} history={browserHistory} />,
    document.getElementById('app')
)
