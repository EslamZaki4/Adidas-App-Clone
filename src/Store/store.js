import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import counterReducer from './Reducers/counter';
import allProductsReducer from './Reducers/allProducts';
import cartReducer from './Reducers/cart';
import wishlistReducer from './Reducers/wishlist';



const rootReducer = combineReducers({
    counterReducer,
    allProductsReducer,
    cartReducer,
    wishlistReducer
});

const store = createStore(rootReducer);
export default store;
