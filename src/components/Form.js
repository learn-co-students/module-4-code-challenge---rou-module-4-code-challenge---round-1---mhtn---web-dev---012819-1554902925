import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    author: "",
    img: ""
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({
      title: "",
      author: "",
      img: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input onChange={this.changeHandler} type="text" name="title" placeholder="title" value={this.state.title}/>
        <input onChange={this.changeHandler} type="text" name="author" placeholder="author" value={this.state.author}/>
        <input onChange={this.changeHandler} type="text" name="img" placeholder="img" value={this.state.img}/>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
