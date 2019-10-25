import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import loggedReducer from './loggedReducer'

export default combineReducers({
counter:counterReducer,
isLogged:loggedReducer
})