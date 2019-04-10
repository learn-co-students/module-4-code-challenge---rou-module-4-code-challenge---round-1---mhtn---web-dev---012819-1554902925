import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBookHandler(this.state);
    this.setState({title: '', author: '', img: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.title} name="title" onChange={this.handleChange} placeholder="title"/>
        <input type="text" value={this.state.author} name="author" onChange={this.handleChange} placeholder="author"/>
        <input type="text" value={this.state.img} name="img" onChange={this.handleChange} placeholder="img"/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;
