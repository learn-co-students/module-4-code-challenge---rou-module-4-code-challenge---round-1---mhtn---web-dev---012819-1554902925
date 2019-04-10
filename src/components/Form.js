import React from "react";

class Form extends React.Component {
  state= {
    title: '',
    author: '',
    img:''
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onSubmitHandler(this.state)
    this.setState({
      title: '',
      author: '',
      img:''
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input type="text" name="title" value={this.state.title} placeholder="Book Title" onChange={this.onChangeHandler}/>
        <input type="text" name="author" value={this.state.author} placeholder="Author" onChange={this.onChangeHandler}/>
        <input type="text" name="img" value={this.state.img} placeholder="Book Image" onChange={this.onChangeHandler}/>
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;
