import React, { Component } from "react";

import Book from '../../components/Book/Book';

import axios from 'axios';

class BookSearch extends Component {

  // 2: set up state for searchTerm input box
state = {
searchTerm: '',
// 6.5: don't forget to add books to your state
books: []
}

// 1: stop the form from submitting
handleSubmit = (event) => {
event.preventDefault();

// 1.5: I want to submit a search query, but I don't have access to the input field

// 4: submit search
axios
    // 4.5: use hard-coded search
    // .get('https://www.googleapis.com/books/v1/volumes?q=quilting')

    // 5: add in text field data
    .get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.searchTerm)
    .then((result) => {
    console.log(result.data.items);
    // 6: save results to state
    this.setState({ books: result.data.items });
    });
}

// 3: Update state when searchTerm box is typed into
handleChange = (event) => {
// extract name and value
const { name, value } = event.target;

// update app state
this.setState({ [name]: value });
}

render() {
return (
    <div className="container" onSubmit={this.handleSubmit}>
    <form id="search-form" name="searchForm">
        <section>
        <input
            type="text"
            name="searchTerm"
            placeholder="Type here, click button, get search results"
            // 2.5: attach searchTerm state value to input box
            value={this.state.searchTerm}
            // 3.5: attach change handler to input box
            onChange={this.handleChange}
        />
        </section>
        <section>
        <button>Search!</button>
        </section>
    </form>
    <div>
        {
        /* Now that we have the search results, let's display them */
        /* 7: Display book info */
        this.state.books.map((bookData) => (
            // 8: extract a new component
            <Book bookToDisplay={bookData.volumeInfo} />
            //^            ^          ^
            //component    propName   data for display
        ))
        }
    </div>
    </div>
);
}
}

export default BookSearch;