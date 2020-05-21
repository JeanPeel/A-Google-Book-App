import React from 'react';
import "./BookData.css";

export default function BookData(props) {
    const bookToDisplay = props.bookToDisplay;

    return (
        <div class='bookstyl'>
            <div class='btnset2'>
                <a href={bookToDisplay.link} ><button
                    className="btn btn-dark btnstyle2"
                >
                    View
                </button></a>
                <button
                    className="btn btn-dark btnstyle2"
                >
                    Delete
                </button>
            </div>
            <div class='bookhead'>
                <h3>{bookToDisplay.title}</h3>
                <h5>{bookToDisplay.authors.join(', ')}</h5>
            </div>
            <div class='bkdescrip'>
            <img class="bookimg" src={bookToDisplay.image}></img>
            {bookToDisplay.description}
            </div>
        </div>
    );
}