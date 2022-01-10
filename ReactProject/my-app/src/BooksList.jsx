import React from 'react';
import Books from './BooksArray';

const showAlert = () => {
    alert('clicked')
}
const showBooks = (Books) => (
    <div>
        {Books.map((book) => (
            <div key={book.name} className='book' onClick={showAlert}>
                <h2>{book.name}</h2>
                <p>by {book.author}</p>
                <p>{book.description}</p>
            </div>
        ))}
    </div>
)
class BooksList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "rama"
        }
    }
    componentDidMount(){
        alert('in componentDidMount');
        this.setState({name: "Rama Chintaguntla"})
    }
    
    render() {
        alert('in render');
        return (<div className='text'> Books List for {this.state.name}
            {showBooks(this.props.Books)}
        </div>)
        
    }
}

export default BooksList;