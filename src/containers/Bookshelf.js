import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  function renderBooks() {
    return props.books.map(book => <Book book={book} sendImgHandler={props.bookShelfClickHandler} fromBookShelf clickedBookArray={props.clickedBookArray}/>)
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderBooks()}</ul>
    </div>
  );
};

export default Bookshelf;
