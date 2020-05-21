import React from 'react';
import "./SBook.css";

export default function SBook(props) {
    const SBookToDisplay = props.SBookToDisplay;

    return (
        <div class='bookstyl'>
            <div class='btnset2'>
                <a href={SBookToDisplay.link} ><button
                    className="btn btn-dark btnstyle2"
                >
                    View
                </button></a>
                <button
                    className="btn btn-dark btnstyle2"
                >
                    Save
                </button>
            </div>
            <div class='bookhead'>
                <h3>{SBookToDisplay.title}</h3>
                <h5>{SBookToDisplay.authors.join(', ')}</h5>
            </div>
            <div class='bkdescrip'>
            <img class="bookimg" src={SBookToDisplay.mage}></img>
            {SBookToDisplay.description}
            </div>
        </div>
    );
}