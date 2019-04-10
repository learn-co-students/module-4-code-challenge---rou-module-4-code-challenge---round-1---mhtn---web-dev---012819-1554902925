import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.title]: event.target.value,
      [event.target.author]: event.target.value,
      [event.target.img]: event.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" onChange={this.changeHandler} placeholder='Title'/>
        <input type='text' name='author' onChange={this.changeHandler} placeholder='Author'/>
        <input type='text' name='img' onChange={this.changeHandler} placeholder='Image Url'/>
        <input type='submit' value='Submit'/>
      </form>
    )
  }
}

export default Form;
