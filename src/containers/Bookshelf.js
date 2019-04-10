import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  //no state needed, so can stay as a function

  let bookArr = props.books.map(book => (
    <Book key={book.id} book={book} handleClick={props.handleClick}/>
  ))

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{bookArr}</ul>
    </div>
  );
};

export default Bookshelf;
