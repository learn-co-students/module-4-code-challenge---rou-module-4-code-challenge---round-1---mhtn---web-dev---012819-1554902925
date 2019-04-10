import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    img: "",
    author: ""
  }

  onChangeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmitHandler = (e) => {
    e.preventDefault()
    this.props.onSubmitHandler(this.state)
  }

  render() {
    return (
      <div>
        <label>
          Title:
          <input onChange={this.onChangeHandler} type="text" name="title" />
          Image:
          <input onChange={this.onChangeHandler} type="text" name="img" />
          Author:
          <input onChange={this.onChangeHandler} type="text" name="author" />
        </label>
        <button onClick={this.onSubmitHandler}> add Book ! </button>
    </div>
    )
  }
}

export default Form;
