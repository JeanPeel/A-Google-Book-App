import React from 'react';
import axios from "axios";
import "./Book.css";
// import { useAlert } from "react-alert";

export default function Book(props) {
    const title = props.title;
    const authors = props.authors;
    const image = props.image;
    const description = props.description;
    const link = props.link;
    // const alert = useAlert();

    const bookToDisplay = {
        title: props.title,
        authors: props.authors,
        image: props.image,
        description: props.description,
        link: props.link,
    }


const handleSave = (book) => {
    axios
        .post("/api/books", bookToDisplay)
        // .then(() => {
        //     alert.show(`${book.title} was saved to the Book List.`)
        // })
        .catch((error) => {
            console.log(error);
        });
};

return (
        <div class='bookstyl'>
            <div class='btnset2'>
                <a rel="noopener noreferrer"  href={link} target="_blank">
                    <button
                        type='button'
                        className="btn btn-dark btnstyle2"
                >
                    View
                </button></a>
                <button
                    type='button'
                    className="btn btn-dark btnstyle2"
                    onClick={() => handleSave(bookToDisplay)}
                >
                    Save
                </button>
            </div>
            <div class='bookhead'>
                <h3>{title}</h3>
                <h5>{authors}</h5>
            </div>
            <div class='bkdescrip'>
            <img class="bookimg" src={image}></img>
            <p>Synopsis: {description}</p>
            </div>
        </div>
    );

};