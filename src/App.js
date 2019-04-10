import React, { Component, Fragment } from "react";
import AddBookForm from "./components/AddBookForm";
import Header from "./components/Header";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import 'semantic-ui-css/semantic.min.css';

const API_URL = 'http://localhost:3005/books';
const uiContainerStyle = {
  // margin: '5em',
  padding: '4em',
};

class App extends Component {
  state = {
    books: [],
    bookshelf: [],
  }

  componentDidMount() {
    fetch(API_URL)
      .then(response => response.json())
      .then(json => this.setState({ books: json }));
  }

  handleBookClick = (bookId, source) => {
    switch(source) {
      case 'list':
        this.addToShelf(bookId);
        break;
      case 'shelf':
        this.removeFromShelf(bookId);
        break;
      default:
        break;
    }
  }

  handleBookSubmit = (e, params) => {
    e.preventDefault();
    fetch(API_URL, {
      method: 'POST',
      headers: {
            'Content-Type': 'application/json',
        },
      body: JSON.stringify(params),
    })
      .then(response => response.json())
      .then(response => this.setState({ books: [...this.state.books, response] }))
      .catch(error => console.error(error));
  }

  addToShelf(bookId) {
    const index = this.state.books.findIndex(book => book.id === bookId);
    const asset = this.state.books.splice(index, 1)[0];
    this.setState({
      books: [...this.state.books],
      bookshelf: [...this.state.bookshelf, asset],
    });
  }

  removeFromShelf(bookId) {
    const index = this.state.bookshelf.findIndex(book => book.id === bookId);
    const asset = this.state.bookshelf.splice(index, 1)[0];
    this.setState({
      books: [...this.state.books, asset],
      bookshelf: [...this.state.bookshelf],
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="ui container" style={uiContainerStyle}>
          <div className="ui grid">
            <AddBookForm submitToParent={this.handleBookSubmit} />
            <BookList books={this.state.books} handleBookClick={this.handleBookClick} />
            <Bookshelf books={this.state.bookshelf} handleBookClick={this.handleBookClick} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
