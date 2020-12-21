import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../store/actionCreators';

function Book(props) {
    const history = useHistory();
    const { id } = useParams();
    const book = props.books.filter(item => item.id === parseInt(id))[0];

    const handleClick = () => {
        props.addToCart(book);
        history.push('/cart');
    }

    const inCart = () => {
        let flag = false;
        props.cart.items.forEach(item => {
            if(item.id === book.id) {
                flag = true;
            }
        });
        return flag;
    }

    return <div className="flex-column-center">
        <h1>{book.name}</h1>
        <img className="book-image" src={book.image} alt={book.name}/>
        <h4 style={{margin: '20px'}}>Author: {book.author}</h4>
        <div className="book-desc">
            <h3>Description:</h3>
            <p>{book.info}</p>
        </div>
        <div style={{width: '100%', backgroundColor: 'whitesmoke'}} className="flex-row-center">
            <h2 className="flex-row-center">Price: ${book.price}</h2>
            <h2 className="flex-row-center addtocart-btn" onClick={() => inCart() ? null : handleClick()}>
                {inCart() ? "Added to Cart" : "Add to Cart"} 
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M5.5 3.5a2.5 2.5 0 0 1 5 0V4h-5v-.5zm6 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                </svg>
            </h2>
        </div>
    </div>
}

const mapStateToProps = state => ({
    books: state.storeItems.books,
    cart: state.cart
});

export default connect(mapStateToProps, { addToCart })(Book);