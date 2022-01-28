import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from './reducers/cart';
import { filterReducer  } from './reducers/filterPrice';
import { userReducer } from './reducers/user';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    filter: filterReducer
})

const middlewares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;