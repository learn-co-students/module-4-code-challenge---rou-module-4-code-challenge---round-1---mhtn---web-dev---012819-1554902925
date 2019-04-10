import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state ={
    books: [],
    bookShelf: []
  }


  componentDidMount(){

    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(books => {
      this.setState({books})
    })
  }


  addToBookShelfHandler = (book) => {
    const books = this.state.bookShelf
    this.setState({bookShelf: [...books, book ]})
  }

  removeFromBookShelfHandler = (props) => {
    console.log('remove hander', props)
    const newBookShelf = this.state.bookShelf.filter(book => book.id !== props.id)
    this.setState({bookShelf: newBookShelf})
  }

  addNewBookHandler = (book) => {
    this.setState({books : [...this.state.books, book]})
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} clickHandler={this.addToBookShelfHandler}
          submitHandler={this.addNewBookHandler}  />
        <Bookshelf books={this.state.bookShelf} clickHandler={this.removeFromBookShelfHandler} />
      </div>
    );
  }
}

export default App;
