import React from 'react';
import { Container, Row, Col } from '../Grid/Grid';

export default function Book(props) {
const bookToDisplay = props.bookToDisplay;

return (
<div>
    <Container >
        <Row size='xs-12'>
            <Col size='xs-8'>
            <div>Title: {bookToDisplay.title}</div>
            <div>Author(s): {bookToDisplay.authors.join(', ')}</div>
            </Col>
            <Col size='xs-4'>
            <div class='viewbtn'>Link: {bookToDisplay.link} </div>
            <div class='savebtn'> Save </div> 
            <div class='deletebtn'> Delete </div> 
            </Col>
        </Row>
        <Row size='xs-12'>
            <Col size='xs-4'>
            <div>Image: {bookToDisplay.image}</div>
            </Col>
            <Col size='xs-8'>
            <div>Description: {bookToDisplay.description}</div>
            </Col>
        </Row>
    </Container>
</div>
);
}