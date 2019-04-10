import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  render() {
    let booksArray = this.props.books.map(bookObj => <Book key={bookObj.id} book={bookObj}/>)
    return (

      <div className="book-list">
        <h1 onClick={this.clickHandler}>Book List</h1>
        <Form />
        <ul>{booksArray}</ul>
      </div>
    );
  }
}

export default BookList;
