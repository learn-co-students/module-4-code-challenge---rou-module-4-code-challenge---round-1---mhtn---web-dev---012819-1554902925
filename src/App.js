import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: []
  }

  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    .then(books => this.setState({books: books}))
  }

  clickHandler = () => {
    console.log('clicked')
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} onClick={() => this.clickHandler}/>
        <Bookshelf />
      </div>
    );
  }
}

export default App;
