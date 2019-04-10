import React from "react";

const Book = props => {
  // console.log('book:', props.book)
  return (
    <div onClick={() => props.clickHandler(props.book)}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img}/>
    </div>
  );
};

export default Book;
