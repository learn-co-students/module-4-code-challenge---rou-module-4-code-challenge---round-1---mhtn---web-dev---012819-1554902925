import React from "react";

const Book = props => {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <img onClick={() => props.clickedBook(props.book)} alt='' src={props.book.img}></img>
    </div>
  );
};

export default Book;
