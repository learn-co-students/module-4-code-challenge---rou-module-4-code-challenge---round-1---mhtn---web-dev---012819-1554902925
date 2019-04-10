import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    let books = this.props.books.map(bookObj => {
      return <Book key={bookObj.id} book={bookObj} clickHandler={this.props.clickHandler}/>
    })
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{books}</ul>
      </div>
    );
  }
}

export default BookList;
