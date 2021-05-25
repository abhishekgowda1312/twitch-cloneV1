import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import streamReducer from './streamReducer'

export default combineReducers({
    auth: authReducer,
    streams: streamReducer,
    form: formReducer //!very important to name key as form in 'redux-form'
})