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
    .then(resp=> resp.json())
    .then(books => this.setState({
      books: books
    }))
  }

  bookClickHandler = (chosenBook) => {
    return this.state.bookShelf.includes(chosenBook) ? null : this.setState({ bookShelf: [...this.state.bookShelf, chosenBook]})
  }

  bookInShelfClickHandler = (chosenBook) => {
    let newBookInShelfArr = this.state.bookShelf.filter((book) => {
      return book.id !== chosenBook.id
    })
    this.setState({
      bookShelf: newBookInShelfArr
    })
  }

  newBookHandler = (newBook) => {
    this.setState({
      books: [...this.state.books, newBook]
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} bookClickHandler={this.bookClickHandler} newBookHandler={this.newBookHandler}/>
        <Bookshelf booksInShelf={this.state.bookShelf} bookInShelfClickHandler={this.bookInShelfClickHandler}/>
      </div>
    );
  }
}

export default App;
