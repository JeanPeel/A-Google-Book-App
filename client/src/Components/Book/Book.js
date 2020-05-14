import React from 'react';

export default function Book(props) {
const bookToDisplay = props.bookToDisplay;

return (
<div>
    <div>Title: {bookToDisplay.title}</div>
    <div>Author(s): {bookToDisplay.authors.join(', ')}</div>
    <div>Description: {bookToDisplay.description}</div>
</div>
);
}