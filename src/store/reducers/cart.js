import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../actionTypes';

const cart = (state = CART, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_CART: 
            return {
                ...state,
                items: [...state.items, action.payload],
                total: state.total + 1
            };
        case REMOVE_ITEM_FROM_CART: 
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            };
        default: return state;
    }
}

const CART = {
    items: [],
    total: 0
}

export default cart;