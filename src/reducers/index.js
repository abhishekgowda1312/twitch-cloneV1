import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'

export default combineReducers({
    auth: authReducer,
    form: formReducer //!very important to name key as form in 'redux-form'
})