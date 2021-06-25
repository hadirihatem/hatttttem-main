import {combineReducers} from 'redux'
import authReducer from './authReducer'
import postReducer from './postReducer'
import userReducer from './userReducer'
import groupeReducer from './groupeReducer'

export default combineReducers({auth: authReducer ,posts:postReducer, user:userReducer,groupe:groupeReducer })