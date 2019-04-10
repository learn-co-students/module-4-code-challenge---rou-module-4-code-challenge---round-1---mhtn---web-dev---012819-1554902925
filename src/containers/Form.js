import React, { Component } from "react";

export default class Form extends Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  changeHandler = (ev) => {
    this.setState({[ev.target.name]: ev.target.value})
  }

  submitHandler = (ev) => {
    ev.preventDefault()
    this.props.submitHandler(this.state)
  }

  render() {

    return (
      <form onSubmit={this.submitHandler}>
        <input placeholder={"Book Title"} onChange={this.changeHandler} name={"title"} value={this.state.title}/>
        <input placeholder={"Author"} onChange={this.changeHandler} name={"author"} value={this.state.author}/>
        <input placeholder={"Book Image"} onChange={this.changeHandler} name={"img"} value={this.state.img}/>
        <input type={"submit"} name={"submit"}/>
      </form>
    )
  }
}