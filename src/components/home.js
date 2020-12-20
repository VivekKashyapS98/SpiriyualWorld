import React from 'react';
import Card from './card';
import { connect } from 'react-redux';

function Home(props) {
    const books = props.books.map((item, index) => {
        return <Card key={index} book={item} />
    });

    return <div className="showcase-cards">
        {books}
    </div>
}

const mapStateToProps = (state) => ({
    books: state.storeItems.books
});

export default connect(mapStateToProps, null)(Home);