import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.submitListener}>
      <input
        type="text"
        placeholder="title"
        name="title"
        value={props.newBook.title}
        onChange={props.changeListener}
      />
      <input
        type="text"
        placeholder="author"
        name="author"
        value={props.newBook.author}
        onChange={props.changeListener}
      />
      <input
        type="text"
        placeholder="img"
        name="img"
        value={props.newBook.img}
        onChange={props.changeListener}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
