import React from "react";

class Form extends React.Component {
  state = {
    title: "",
    author: "",
    img: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      title: "",
      author: "",
      img: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Add a Book</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="author"
            placeholder="author"
            value={this.state.author}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="img"
            placeholder="imageUrl"
            value={this.state.img}
            onChange={this.changeHandler}
          />
          <button>Add a Book</button>
        </form>
      </div>
    );
  }
}

export default Form;
