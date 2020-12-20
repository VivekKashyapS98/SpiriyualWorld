import React from 'react';

export default function Card({ book }) {
    return <div className="card">
        <img className="card-image" src={book.image} alt={book.name}/>
        <h3>{book.name}</h3>
        <p>{book.author}</p>
        <h3>${book.price}</h3>
    </div>
}