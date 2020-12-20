
import { combineReducers } from 'redux';
import storeItems from './storeItems';
import cart from './cart';

const rootReducer = combineReducers({
    storeItems,
    cart
});

export default rootReducer;