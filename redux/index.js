import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import ui from './ui'
import repos from './sampleAsync'

const rootReducer = combineReducers({
    ui,
    repos,
    form: formReducer,
    routing: routerReducer
})

export default rootReducer
