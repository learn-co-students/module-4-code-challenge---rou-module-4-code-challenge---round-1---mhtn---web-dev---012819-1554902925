import React from "react";

const Book = props => {
  return (
    <div className='bookcard' onClick={()=> props.clickHandler(props)}>
      <h2>{props.title}</h2>
      <img src={props.img} />
    </div>
  );
};

export default Book;
