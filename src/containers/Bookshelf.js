import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  let booksArr = props.booksInShelf.map((bookObj) => {
    return <Book book={bookObj} key={bookObj.id} bookInShelfClickHandler={props.bookInShelfClickHandler} bookShelf/>
  })
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{booksArr}</ul>
    </div>
  );
};

export default Bookshelf;
