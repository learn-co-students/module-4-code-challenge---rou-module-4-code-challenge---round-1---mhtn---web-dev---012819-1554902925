import React from "react";
import Book from "../components/Book";
import { Card } from 'semantic-ui-react';

const Bookshelf = props => {
  return (
    <div class="eight wide column">
      <h1>Book Shelf</h1>
      <Card.Group itemsPerRow={3}>
        {
          props.books.map(book => 
            <Book key={book.id} book={book} clickHandler={props.handleBookClick} source='shelf' />
          )
        }
      </Card.Group>
    </div>
  );
};

export default Bookshelf;
