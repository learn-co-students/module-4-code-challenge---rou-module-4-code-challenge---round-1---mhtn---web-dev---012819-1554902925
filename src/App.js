import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";


class App extends Component {

  //class b/c it has state

  state = {
    books: [],
    addedBook: []
  }

  componentDidMount() {
    // console.log('App did mount')
    //decided to fetch in App (parent) as both the children BookList and BookShelf need access to the list of books
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    .then(books => this.setState({ books }))
  }

  handleClick = (book) => {
    //arrow functions automatically bind so don't have to deal with that nonsense in the useless constructor
    // console.log('click');
    //never mutate state, use spread operator to make a copy
    let newArr = [...this.state.addedBook, book]
    //don't change state diretly, use this.setState
    this.setState({
      addedBook: newArr
    })
  }

  removeHandleClick = (book) => {
    // console.log('unclick');
    let filteredArr = this.state.addedBook.filter(bookObj => bookObj.id !== book.id)
    //this checks the addedBook array to see if the book doesn't match the id so it will be removed on click
    this.setState({
      addedBook: filteredArr
    })
  }

  handleSubmit = (newBook) => {
    console.log('newBook', newBook)
    //it knows what newBook is so that's promising

    let newBookArr = [newBook, ...this.state.books]
    this.setState({
      books: newBookArr
    })
    //always check syntaxxxxxxxx!!!!!! wasn't working for a while and then noticed syntax error
  }
  //know about the new books being submitted


  render() {
    // console.log(this.state.books)
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClick={this.handleClick} handleSubmit={this.handleSubmit}/>
        <Bookshelf books={this.state.addedBook} handleClick={this.removeHandleClick}/>
      </div>
    );
  }
}

// named the handleClick the same so when I call it later in BookShelf it applies the removeHandleClick method that is written

export default App;
