import React from 'react';
import booksdetails from './BookDetails_1';

const BooksDetailsComponent = () => {
    return (
        <div>
            <h2>{booksdetails.name}</h2>
                <p>by {booksdetails.author}</p>
                <p>{booksdetails.description}</p>
                <p>{booksdetails.detailedDescription}</p>
        </div>
    )
}

export default BooksDetailsComponent;