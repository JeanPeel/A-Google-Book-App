import React, { Component } from "react";
import axios from "axios";

import Book from '../../components/Book/Book';

class SavedBooks extends Component {

state = {
books: []
}

componentDidMount() {
axios.get('/api/savedBooks')
    .then((response) => {
    this.setState({ books: response.data });
    })
}

render() {
return (
    <div className="container">
    <div>
        {
        this.state.books.map((bookData) => (
            <Book bookToDisplay={bookData} />
        ))
        }
    </div>
    </div>
);
}
}

export default SavedBooks;