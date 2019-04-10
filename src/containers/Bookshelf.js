import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  let books = props.bookshelf.map((book) =>
    <Book key={book.id} book={book} clickHandler={props.clickHandler}/>
  )

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{books}</ul>
    </div>
  );
};

export default Bookshelf;
