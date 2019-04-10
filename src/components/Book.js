import React from "react";

const Book = props => {

  //this can stay as a function since there doesn't need to be state

  return (
    <div>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} alt="" onClick={() => props.handleClick(props.book)}/>
    </div>
  );
};

export default Book;
