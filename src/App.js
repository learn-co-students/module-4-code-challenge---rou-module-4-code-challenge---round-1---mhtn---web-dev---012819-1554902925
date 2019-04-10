import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    bookShelf: [],
    newBook: {
      title: "",
      author: "",
      img: ""
    }
  };

  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(r => r.json())
      .then(books => this.setState({ books }));
  }
  // clicking one of books in the list will add to the shelf, includes duplication validation
  clickListener = book => {
    if (this.state.bookShelf.length > 0) {
      const collectedBookIds = this.state.bookShelf.map(bookObj => bookObj.id);
      !collectedBookIds.includes(book.id)
        ? this.setState({ bookShelf: [...this.state.bookShelf, book] })
        : alert("already added");
    } else {
      this.setState({ bookShelf: [...this.state.bookShelf, book] });
    }
  };
  // clicking one of books in the shelf will remove it.
  removeListener = book => {
    const filteredRemovingBooks = this.state.bookShelf.filter(
      bookObj => bookObj.id !== book.id
    );
    this.setState({ bookShelf: filteredRemovingBooks });
  };
  // sets the state that came from submitting form
  changeListener = e => {
    this.setState(
      {
        newBook: {
          ...this.state.newBook,
          [e.target.name]: e.target.value
        }
      },
      () => console.log(this.state.newBook)
    );
  };
  // upon submit, validates if the same title already exists, then add to the list
  submitListener = e => {
    e.preventDefault();
    const collectedBookTitles = this.state.books.map(bookObj => bookObj.title);
    // const collectedBookAuthors = this.state.books.map(bookObj => bookObj.author);
    // I can create additional condition to validate authors since diff authors can have the same title.
    if (!collectedBookTitles.includes(this.state.newBook.title)) {
      this.setState({ books: [this.state.newBook, ...this.state.books] }, () =>
        this.setState({
          newBook: {
            title: "",
            author: "",
            img: ""
          }
        })
      );
    } else {
      alert("already added");
    }
  };

  render() {
    return (
      <div className="book-container">
        <BookList
          books={this.state.books}
          clickListener={this.clickListener}
          newBook={this.state.newBook}
          changeListener={this.changeListener}
          submitListener={this.submitListener}
        />
        <Bookshelf
          books={this.state.bookShelf}
          removeListener={this.removeListener}
        />
      </div>
    );
  }
}

export default App;
