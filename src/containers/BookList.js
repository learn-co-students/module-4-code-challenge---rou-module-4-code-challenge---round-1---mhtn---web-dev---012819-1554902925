import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  renderBooks = () => {
    return this.props.books.map(book => <Book key={book.id} book={book} sendImgHandler={this.props.sendImgHandler} clickedBookArray={this.props.clickedBookArray} fromBookList/>)
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>

        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
