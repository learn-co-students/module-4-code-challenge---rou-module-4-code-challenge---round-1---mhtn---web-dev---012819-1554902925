import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    bookshelf: []
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(resp => resp.json())
    .then(books => this.setState({books: books}))
  }

  clickHandler = (book) => {
    let newArray = [...this.state.bookshelf, book]
    let unique = [...new Set(newArray)];
    this.setState({bookshelf: unique})
  }

  takeOffShelfClickHandler = (bookObj) => {
    let newArray = this.state.bookshelf.filter((book) => book.id !== bookObj.id)
    this.setState({bookshelf: newArray})
  }

  submitHandler = (newBook) => {
    let newArray = [newBook, ...this.state.books]
    this.setState({books: newArray})
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} clickHandler={this.clickHandler} submitHandler={this.submitHandler}/>
        <Bookshelf bookshelf={this.state.bookshelf} clickHandler={this.takeOffShelfClickHandler}/>
      </div>
    );
  }
}

export default App;
