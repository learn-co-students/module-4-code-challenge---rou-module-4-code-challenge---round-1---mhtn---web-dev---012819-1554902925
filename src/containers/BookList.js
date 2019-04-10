import React, { Component } from "react";
import Book from "../components/Book";
import { Card } from 'semantic-ui-react';

const BookList = props => {
  return (
    <div className="eight wide column">
      <h1>Book List</h1>
      <Card.Group itemsPerRow={3}>
        {
          props.books.map(book => 
            <Book key={book.id} book={book} clickHandler={props.handleBookClick} source='list' />
          )
        }
      </Card.Group>
    </div>
  );
}

export default BookList;
