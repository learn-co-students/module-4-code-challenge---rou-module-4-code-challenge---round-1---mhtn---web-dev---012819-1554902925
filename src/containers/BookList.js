import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <Form addingBook={this.props.addingBook} allBooks={this.props.books}/>
        <h1>Book List</h1>
        <ul>{this.props.books.map(book => {
          return <Book key={book.id} clickedBook={this.props.clickedBook} book={book}/>
        })}</ul>
      </div>
    );
  }
}

export default BookList;
