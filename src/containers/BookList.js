import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
//could be functional component?

  render() {
    let books = this.props.books.map((book) => <Book book={book} key={book.id} clickHandler={this.props.clickHandler}/>)

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form submitHandler={this.props.submitHandler}/>
        <ul>{books}</ul>
      </div>
    );
  }
}

export default BookList;
