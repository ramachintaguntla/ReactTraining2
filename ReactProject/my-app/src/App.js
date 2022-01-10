import React from 'react';
import './App.css';
import BooksList from './BooksList';
import Books from './BooksArray';

function App() {
  return (
   <div>
        <h1 className='text'>
      Welcome to the Library

    </h1>
    <BooksList Books={Books} />
</div>
  );
}

export default App;
