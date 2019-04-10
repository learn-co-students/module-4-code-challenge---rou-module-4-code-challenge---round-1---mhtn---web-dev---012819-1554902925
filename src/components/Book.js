import React from "react";

class Book extends React.Component {

  // If coming from book list, send handleShelf
  // If coming from shelf, send remove shelf
  // Distinguish via shelf props
  handleShelf = (e) => {
    if (!this.props.shelf) {
      this.props.handleShelf(parseInt(e.target.dataset.id));
    } else if (this.props.shelf) {
      this.props.removeShelf(parseInt(e.target.dataset.id));
    }
  }

  // Render each book title/img
  // Event listener on img
  render() {
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <h4>By: {this.props.book.author}</h4>
        <img alt="Book Cover Page" data-id={this.props.book.id} src={this.props.book.img} onClick={this.handleShelf}/>
      </div>
    );
  }
};

export default Book;
