import React from 'react';
import './App.css';
import BooksList from './BooksList';
import BooksDetails from './BooksDetailsComponent';
import Books from './BooksArray';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
   <div>
        <h1 className='text'>
      Welcome to the Library

    </h1>
    <BrowserRouter>
    <Switch>
      <Route path="/books">
        <BooksList Books={Books} />
      </Route>

      <Route path="/booksdetails">
      <BooksDetails />
        </Route>
    </Switch>
    </BrowserRouter>
   
</div>
  );
}

export default App;
