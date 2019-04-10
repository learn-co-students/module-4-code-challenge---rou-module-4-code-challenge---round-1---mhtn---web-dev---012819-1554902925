import React from "react";

const Book = props => {

  function imgClickHandler() {
    if (!props.clickedBookArray.includes(props.book) && props.fromBookList) {
      props.sendImgHandler(props.book)
    } else if (props.clickedBookArray.includes(props.book) && props.fromBookShelf) {
      props.sendImgHandler(props.book)
    }
  }

  return (
    <div>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} onClick={imgClickHandler}/>
    </div>
  );
};

export default Book;
