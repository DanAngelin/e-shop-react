import { createStore, combineReducers } from "redux";
import { cartReducer } from './reducers/cart';
import { filterReducer  } from './reducers/filterPrice';


const rootReducer = combineReducers({
    cart: cartReducer,
    filter: filterReducer
})

const store = createStore(rootReducer);

export default store;