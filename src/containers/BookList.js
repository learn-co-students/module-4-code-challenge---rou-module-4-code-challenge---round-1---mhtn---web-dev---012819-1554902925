import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  render() {
    let booksArr = this.props.books.map((bookObj) => {
      return <Book book={bookObj} bookClickHandler={this.props.bookClickHandler} key={bookObj.id}/>
    })

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form onSubmitHandler={this.props.newBookHandler}/>
        <ul>{booksArr}</ul>
      </div>
    );
  }
}

export default BookList;
