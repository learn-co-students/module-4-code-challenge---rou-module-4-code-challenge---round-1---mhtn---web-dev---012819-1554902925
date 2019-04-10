import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookShelf: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then(resp => resp.json())
      .then(books => this.setState({books: books}))
  }

  clickedBook = book => {
    const found = this.state.bookShelf.filter(bookObj => bookObj.id === book.id)
    if (found.length > 0) {
      const foundBook = this.state.bookShelf.filter(bookObj => bookObj.id === book.id)
      const clone = this.state.bookShelf
      const index = clone.indexOf(foundBook[0])
      console.log(index);
      clone.splice(index,1)
      this.setState(prevState => ({
        bookShelf: clone
      }))
  } else {
      this.setState(prevState => ({
        bookShelf: [...prevState.bookShelf, book]
      }))
  }
  }

  addingBook = book => {
    this.setState(prevState => ({
      books: [book, ...prevState.books]
    }))
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addingBook={this.addingBook} clickedBook={this.clickedBook}/>
        <Bookshelf bookShelf={this.state.bookShelf} clickedBook={this.clickedBook}/>
      </div>
    );
  }
}

export default App;
