import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from "./containers/Form"

class App extends Component {

  state = {
    books: [],
    shelf: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then(res => res.json())
      .then(data => this.setState({books: data}))
  }

  addToFavorites = (book) => {
    let newArr = [...this.state.shelf, book]
    this.setState({shelf: newArr})
  }

  removeFromFavorites = (book) => {
    let newArr = [...this.state.shelf]
    let removed = newArr.filter(bookObj => {
      return bookObj.id !== book.id
    })
    this.setState({shelf: removed})
  }

  addToBooks = (book) => {
    let newArr = [book, ...this.state.books]
    this.setState({books: newArr})
  }

  render() {
    return (
      <div className="book-container">
        <Form submitHandler={this.addToBooks}/>
        <BookList books={this.state.books} clickHandler={this.addToFavorites}/>
        <Bookshelf shelf={this.state.shelf} clickHandler={this.removeFromFavorites}/>
      </div>
    );
  }
}

export default App;
