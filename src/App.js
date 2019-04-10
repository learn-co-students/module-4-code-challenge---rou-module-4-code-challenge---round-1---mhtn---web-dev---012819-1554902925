import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from "./components/Form";

class App extends Component {

  state = {
    booksArray: [],
    clickedBookArray: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(response => response.json())
    .then(books => this.setState({booksArray: books}))
  }

  sendImgHandler = (bookObj) => {
    const newArray = [...this.state.clickedBookArray, bookObj]
    this.setState({clickedBookArray: newArray})
  }

  bookShelfClickHandler = (bookObj) => {
    const newArray = [...this.state.clickedBookArray].filter(book => book.id !== bookObj.id);
    this.setState({clickedBookArray: newArray})
  }

  addBookHandler = (newBookObj) => {
    const newArray = [newBookObj, ...this.state.booksArray]
    this.setState({booksArray: newArray})
  }

  render() {
    // console.log(this.state.booksArray);
    return (
      <div className="book-container">
        <Form addBookHandler={this.addBookHandler} booksArray={this.state.booksArray}/>
        <BookList books={this.state.booksArray} sendImgHandler={this.sendImgHandler} clickedBookArray={this.state.clickedBookArray}/>
        <Bookshelf books={this.state.clickedBookArray} bookShelfClickHandler={this.bookShelfClickHandler} clickedBookArray={this.state.clickedBookArray}/>
      </div>
    );
  }
}

export default App;
