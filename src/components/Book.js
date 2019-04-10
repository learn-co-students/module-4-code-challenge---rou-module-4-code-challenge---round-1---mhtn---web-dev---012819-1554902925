import React from "react";

const Book = props => {
  const { title, img } = props.book;
  return (
    <div onClick={() => props.clickListener(props.book)}>
      <h2>{title}</h2>
      <img src={img} alt="" />
    </div>
  );
};

export default Book;
