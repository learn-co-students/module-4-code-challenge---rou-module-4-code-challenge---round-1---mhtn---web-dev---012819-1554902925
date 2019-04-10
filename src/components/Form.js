import React from "react";

class Form extends React.Component {

  state = {
    id: this.props.books.length,
    title: '',
    author: '',
    img: ''
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = () => {
    this.setState({id: (this.props.books.length + 1)}, this.props.submitHandler(this.state))
    this.setState({
      title: '',
      author: '',
      img: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Add New Book:</h1>
        <label>Title:</label>
        <input
          onChange={this.changeHandler}
          type="text"
          name="title"
          placeholder="Book Title"
          value={this.state.title}
        />
        <label>Author:</label>
        <input
          onChange={this.changeHandler}
          type="text"
          name="author"
          placeholder="Book Author"
          value={this.state.author}
        />
        <label>Image:</label>
        <input
          onChange={this.changeHandler}
          type="text"
          name="img"
          placeholder="Book Cover"
          value={this.state.img}
          />
        <button onClick={this.submitHandler} type="Submit">Add new Book</button>
      </div>
    )
  }
}

export default Form;
