import React from 'react';
import "./Book.css";
import axios from 'axios';

export default function Book(props) {
    const bookToDisplay = props.bookToDisplay;

    const handleSave = (bookToDisplay) => {
        axios
            .post('/localhost:3001/googleBooks', bookToDisplay)
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div class='bookstyl'>
            <div class='btnset2'>
                <a rel="noopener noreferrer" href={bookToDisplay.link}  target="_blank"><button
                    type='button'
                    className="btn btn-dark btnstyle2"
                >
                    View
                </button></a>
                <button
                    className="btn btn-dark btnstyle2"
                    onClick={() => handleSave(bookToDisplay)}
                >
                    Save
                </button>
            </div>
            <div class='bookhead'>
                <h3>{bookToDisplay.title}</h3>
                <h5>{bookToDisplay.authors}</h5>
            </div>
            <div class='bkdescrip'>
            <img class="bookimg" src={bookToDisplay.image} alt=''></img>
            <p>Synopsis: {bookToDisplay.description}</p>
            </div>
        </div>
    );
}
