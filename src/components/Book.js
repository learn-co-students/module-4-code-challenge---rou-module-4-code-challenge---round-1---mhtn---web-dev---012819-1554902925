import React from "react";

const Book = (props) => {

  let clickHandler = (e) => {
    props.clickHandler(props.book)
  }

  return (
    <div>
      <h2>{props.book.title}</h2>
      <img onClick={clickHandler} src={props.book.img} alt=""/>
    </div>
  );

};

export default Book;
