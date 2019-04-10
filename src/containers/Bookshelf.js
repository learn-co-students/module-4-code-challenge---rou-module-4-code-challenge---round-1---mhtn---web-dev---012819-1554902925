import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component {

  // Receive shelf books via props from App
  // Map over and send each book to Book component as a list item
  // Send shelf props to distinguish clicks
  // Pass removeShelf up to App
  render() {
    let shelf = this.props.shelf.map(book => {
      return <li><Book book={book} shelf removeShelf={this.props.removeShelf}/></li>
    })
    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{shelf}</ul>
      </div>
    );
  }
};

export default Bookshelf;
