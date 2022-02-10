import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from './Cart/CartReduce';
import { filterReducer  } from './FilterPrice/FilterPriceReducer';
import { userReducer } from './User/UserReducer';
import { addFavoritesReducer } from './Favorites/AddToFavoritesReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const rootReducer = combineReducers({
    user: userReducer,
    filter: filterReducer,
    cart: cartReducer,
    addfavorite: addFavoritesReducer,
})

const middlewares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;