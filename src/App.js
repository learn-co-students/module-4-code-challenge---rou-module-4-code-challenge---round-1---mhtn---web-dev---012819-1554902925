import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    shelf: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(books => this.setState({books}))
  }

  clickAddHandler = (book) => {
    // console.log('book add clicked', book)
    this.setState({shelf: [...this.state.shelf, book]})
  }

  clickRemoveHandler = (book) => {
    // console.log('book remove clicked', book)
    let newArr = this.state.shelf.filter(bookObj => bookObj.id !== book.id)
    this.setState({shelf: newArr})
  }

  submitHandler = (book) => {
    // console.log('submit clicked', book)
    this.setState({books: [book, ...this.state.books]})
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} clickHandler={this.clickAddHandler} submitHandler={this.submitHandler}/>
        <Bookshelf shelf={this.state.shelf} clickHandler={this.clickRemoveHandler}/>
      </div>
    );
  }
}

export default App;
