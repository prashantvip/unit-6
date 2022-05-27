import {legacy_createStore} from 'redux'
import { combineReducers } from 'redux';
import {userReducer} from '../Redux/UserInfo/reducer'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux';

const rootReducer = combineReducers({
    user : userReducer
})
const store = legacy_createStore(rootReducer,
    applyMiddleware(thunk)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {store}
