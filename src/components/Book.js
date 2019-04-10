import React from "react";

const Book = props => {

  return (
    <div>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} onClick={()=> { props.bookShelf? props.bookInShelfClickHandler(props.book) : props.bookClickHandler(props.book)}}/>
    </div>
  );
};

export default Book;
