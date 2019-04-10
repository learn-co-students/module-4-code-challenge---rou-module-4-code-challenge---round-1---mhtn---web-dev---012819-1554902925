import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form onSubmitHandler={this.props.onSubmitHandler}/>
        <ul>{this.props.books.map(book => <Book onClickHandler={this.props.onClickHandler} key={book.id} book={book}/>)}</ul>
      </div>
    );
  }
}

export default BookList;
