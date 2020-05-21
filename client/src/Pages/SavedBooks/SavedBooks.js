import React, { Component } from "react";
import SBook from '../../Components/SBook/SBook';
import "./SavedBooks.css";
import axios from "axios";

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
                        this.state.books.map((SBookData) => (
                            <SBook SBookToDisplay={SBookData} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default SavedBooks;