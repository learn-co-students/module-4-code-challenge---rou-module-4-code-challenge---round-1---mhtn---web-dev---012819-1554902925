import React from "react";

class Book extends React.Component {


  clickHandler = () => {
    this.props.clickHandler(this.props.book);
  }

  clickRemoveHandler = () => {
      this.props.clickRemoveHandler(this.props.book);
  }

  render(){
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <img onClick={this.props.onShelf ? this.clickRemoveHandler : this.clickHandler} src={this.props.book.img} alt="Book" />
      </div>
    );
  }
};

export default Book;
