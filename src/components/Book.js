import React, { Component } from "react";

class Book extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <img src={this.props.book.img} onClick={this.clickHandler}/>
      </div>
    )
  }
};

export default Book;
