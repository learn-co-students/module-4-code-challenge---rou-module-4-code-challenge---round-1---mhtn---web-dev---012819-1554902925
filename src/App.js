import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

// Fetch and keep state here - I will want access for list & shelf
// Also, when the form renders, we will want access to that new book as well so that it can be added to shelf
class App extends Component {

  state={
    books: [],
    shelf: []
  }

  // Fetch in component did mount so render calls again
  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(books => (
      this.setState({books})
    ))
  }

  // Passed from book component
  // Find the book object
  // If book isn't already in shelf, add it to shelf
  // Re-render
  handleShelf = (bookId) => {
    let wantedBook = this.state.books.find(book => {
      return book.id === bookId
    })
    if (!this.state.shelf.includes(wantedBook)) {
      let newShelf = [...this.state.shelf, wantedBook]
      this.setState({shelf: newShelf})
    } else if (this.state.shelf.includes(wantedBook)) {
      console.warn('THAT BOOK IS ALREADY ON YOUR SHELF 🚨👀🧐')
    }
  }

  // Passed from book component
  // Remove that book from the shelf
  // Re-render
  removeShelf = (bookId) => {
    let newShelf = [...this.state.shelf].filter(book => {
      return book.id !== bookId
    })
    this.setState({shelf: newShelf})
  }

  // Passed from form component
  // Add new book to book
  // Re-render so book shows at the bottom of the list
  handleSubmit = (bookObj) => {
    let newBooks = [...this.state.books, bookObj]
    this.setState({books: newBooks})
  }

  // Render Booklist component (with books from state, CB for adding to shelf, CB for adding new book)
  // Render Bookshelf component (with shelf from state, CB for removing from shelf)
  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleShelf={this.handleShelf} handleSubmit={this.handleSubmit}/>
        <Bookshelf shelf={this.state.shelf} removeShelf={this.removeShelf}/>
      </div>
    );
  }
}

export default App;
