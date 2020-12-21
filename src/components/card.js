import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Card({ book }) {
    const history = useHistory();
    const handleCLick = () => {
        history.push(`/${book.id}`);
    }

    return <div className="card" onClick={() => handleCLick()}>
        <img className="card-image" src={book.image} alt={book.name}/>
        <h3>{book.name}</h3>
        <p style={{color: '#999999', fontSize: 'small'}}>{book.author}</p>
        <h3>${book.price}</h3>
    </div>
}