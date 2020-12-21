import React, { useState } from 'react';
import { connect } from 'react-redux';
import CardCart from './cartCard';

const Cart = props => {
    const [cartItems, modifyCart] = useState([...props.cart.items]);

    const removeItem = book => {
        const modifiedState = cartItems.filter(item => item.id !== book.id);
        modifyCart(modifiedState);
    }

    const cart = cartItems.map((item, index) => {
        return <CardCart key={index} book={item} removeItem={removeItem} />
    });
    return <div className="flex-column-center">
        <h1>Total: {props.cart.total}</h1>
        <div>
            {cart}
        </div>
    </div>
}


const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps, null)(Cart);