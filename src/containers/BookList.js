import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    let books = this.props.books.map(book => (
      <Book key={book.id} book={book} clickHandler={this.props.clickHandler} />
    ));

    return (
      <div className="book-list">
        <h1>Book List</h1>

        <ul>{books}</ul>
      </div>
    );
  }
}

export default BookList;
