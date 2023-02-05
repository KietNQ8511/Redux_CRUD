import { combineReducers } from 'redux'
import studentReducers from './reducer'

const rootReducer = combineReducers({
    students: studentReducers
})

export default rootReducer