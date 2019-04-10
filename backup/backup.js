import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from "./components/Form";

class App extends Component {
  state = {
    books: [],
    shelf: []
  };

  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(res => res.json())
      .then(books =>
        this.setState(
          { books: books },
          console.log("these are my books", books)
        )
      );
  }

  clickHandler = bookObj => {
    let newArr = [...this.state.shelf, bookObj];
    this.setState({ shelf: newArr });
  };

  removeHandler = bookObj => {
    let newArr = this.state.shelf.filter(book => book.id !== bookObj.id);
    this.setState({ shelf: newArr });
  };

  submitHandler = bookObj => {
    console.log("new book", bookObj);
    let newArr = [bookObj, ...this.state.books];
    this.setState({ books: newArr });
  };

  render() {
    let books = this.state.books;

    return (
      <div>
        <Form submitHandler={this.submitHandler} />
        <div className="book-container">
          <BookList books={books} clickHandler={this.clickHandler} />
          <Bookshelf
            books={this.state.shelf}
            clickHandler={this.removeHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
