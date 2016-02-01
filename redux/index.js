import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import { reducer as formReducer } from 'redux-form'
import ui from './ui'

const rootReducer = combineReducers({
    ui,
    form: formReducer,
    routing: routeReducer
})

export default rootReducer
