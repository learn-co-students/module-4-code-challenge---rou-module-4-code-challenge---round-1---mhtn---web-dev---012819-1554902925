import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const BOOKS_URL = "http://localhost:3005/books";

class App extends Component {

  state = {
    books: [],
    bookShelf: []
  }

  componentDidMount(){
    fetch(BOOKS_URL)
    .then(resp => resp.json())
    .then(books => this.setState({books}))
  }

  clickHandler = (book) => {
    if (this.state.bookShelf.includes(book)) {
      return;
    } else {
      const bookShelf = [book, ...this.state.bookShelf];
      this.setState({bookShelf});
    }
  }

  clickRemoveHandler = (book) => {
    const bookShelf = this.state.bookShelf.filter(bookObj => {
      return bookObj.id !== book.id;
    })
    this.setState({bookShelf});
  }

  submitHandler = (book) => {
    this.setState({books: [book, ...this.state.books]})
  }

  render() {
    return (
      <div className="book-container">
        <BookList
          clickHandler={this.clickHandler}
          submitHandler={this.submitHandler}
          books={this.state.books}
          />
        <Bookshelf
          clickRemoveHandler={this.clickRemoveHandler}
          books={this.state.bookShelf}
          />
      </div>
    );
  }
}

export default App;
