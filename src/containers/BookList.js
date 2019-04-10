import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  // Receive books via props from App
  // Map over and send each book to Book component as a list item
  // Pass handleShelf up to App
  // Render form (with CB to handle submit)
  render() {
    let books = this.props.books.map(book => {
      return <li><Book book={book} handleShelf={this.props.handleShelf}/></li>
    })
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit}/>
        <ul>{books}</ul>
      </div>
    );
  }
}

export default BookList;
