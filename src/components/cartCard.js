import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../store/actionCreators';

const CardCart = props => {
    const book = props.book;
    const handleClick = () => {
        props.removeFromCart(book);
        props.removeItem(book);
    }
    return <div style={{ margin: '10px', backgroundColor: 'whitesmoke', borderRadius: '15px' }} className="cart flex-row-center">
        <img className="cart-image" src={book.image} alt={book.name}/>
        <div style={{ minHeight: '200px' }} className="flex-column-center">
            <h3>{book.name}</h3>
            <h4>{book.author}</h4>
            <h3>${book.price}</h3>
            <span className="flex-row-center addtocart-btn" onClick={() => handleClick()}>
                <b>Remove from Cart</b> 
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M5.5 3.5a2.5 2.5 0 0 1 5 0V4h-5v-.5zm6 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"/>
                </svg>
            </span>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    cart: state.storeItems.cart
});

export default connect(mapStateToProps, { removeFromCart })(CardCart);