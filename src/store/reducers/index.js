import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
// import reducer

export default combineReducers({
    // object reducer
    carts:cartReducer
})