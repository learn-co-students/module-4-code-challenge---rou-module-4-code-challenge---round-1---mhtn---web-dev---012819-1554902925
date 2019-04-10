import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.bookShelf.map(book => {
        return <Book key={book.id} clickedBook={props.clickedBook} book={book}/>
      })}</ul>
    </div>
  );
};

export default Bookshelf;
