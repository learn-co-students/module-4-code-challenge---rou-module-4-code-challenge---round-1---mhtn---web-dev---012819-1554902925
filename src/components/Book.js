import React from "react";

const Book = props => {

  const onClickHandler = (e) => {
    props.onClickHandler(e, props.book)
  }

  return (
    <div>
      <h2>{props.book.title}</h2>
      <img onClick={onClickHandler} src={props.book.img} alt="" />
    </div>
  );
};

export default Book;
