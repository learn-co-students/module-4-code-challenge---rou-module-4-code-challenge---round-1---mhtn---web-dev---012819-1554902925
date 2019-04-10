import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const books = props.books.map(bookObj => <Book
    key={bookObj.id}
    book={bookObj}
    clickRemoveHandler={props.clickRemoveHandler}
    onShelf={true}/>)

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{books}</ul>
    </div>
  );
};

export default Bookshelf;
