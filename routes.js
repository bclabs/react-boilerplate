import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App } from './components'
import { Home, About, Repos } from './pages'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="repos">
            <Route path=":username" component={Repos} />
        </Route>
    </Route>
)

export default routes
