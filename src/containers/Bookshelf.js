import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  console.log(props)
  const books = props.books.map(book => <Book key={book.id} {...book} clickHandler={props.clickHandler}/>)
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{books}</ul>
    </div>
  );
};

export default Bookshelf;
