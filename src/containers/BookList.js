import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    const books = this.props.books.map(book => {
      return (
        <Book
          key={book.id}
          book={book}
          clickListener={this.props.clickListener}
        />
      );
    });
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form
          newBook={this.props.newBook}
          changeListener={this.props.changeListener}
          submitListener={this.props.submitListener}
        />
        <ul>{books}</ul>
      </div>
    );
  }
}

export default BookList;
