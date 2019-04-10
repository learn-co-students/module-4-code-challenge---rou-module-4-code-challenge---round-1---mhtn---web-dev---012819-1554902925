import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from "./components/Form";

class App extends Component {

  state = {
    books: [],
    shelf: []
  }

  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(resp => resp.json())
    .then(data => this.setState({books: data}))
  }

  onClickHandler = (e, book) => {
    let bookLocation = e.target.parentNode.parentNode.parentNode.className
    let bookIds = this.state.shelf.map(book => book.id)
    if(bookIds.includes(book.id) && bookLocation !== "book-list"){
      this.removeBookFromShelf(book)
    }else if (!bookIds.includes(book.id)) {
      this.addBookToShelf(book)
    }
  }

  removeBookFromShelf = (book) => {
    let bookIds = this.state.shelf.map(book => book.id)
    if(bookIds.includes(book.id)){
      this.filterOutBook(book)
    }
  }

  filterOutBook = (book) =>{
    let newShelf = [...this.state.shelf]
    newShelf = newShelf.filter(bookObj => bookObj.id !== book.id)
    this.setState({shelf: newShelf})
  }

  addBookToShelf = (book) => {
    let newShelf = this.state.shelf.concat(book)
    this.setState({shelf: newShelf})
  }

  onSubmitHandler = (book) => {
    console.log("SUBMITTING THIS BOOK !", book)
    let newBooksArray = this.state.books.concat(book)
    this.setState({books: newBooksArray})
  }

  render() {
    return (
      <div className="book-container">
        <BookList onSubmitHandler={this.onSubmitHandler} onClickHandler={this.onClickHandler} books={this.state.books}/>
        <Bookshelf onClickHandler={this.onClickHandler} books={this.state.shelf}/>
      </div>
    );
  }
}

export default App;
