import React from "react";
class Form extends React.Component {

  state = {
    id: null,
    title: null,
    author: null,
    img: null
  }

  changeHandler = e => {
    let id = this.props.allBooks.length + 1
    this.setState({
      id: id,
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.persist()
    e.preventDefault()
    // const children = e.target.children
    this.props.addingBook(this.state)
    this.setState({
      id: null,
      title: null,
      author: null,
      img: null
    })
      e.target.children[0].value = null
      e.target.children[1].value = null
      e.target.children[2].value = null
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Form</h1>
       <form onSubmit={this.submitHandler}>
        <input placeholder='title' name='title' onChange={this.changeHandler} />
        <input placeholder='author' name='author' onChange={this.changeHandler}/>
        <input placeholder='img' name='img' onChange={this.changeHandler}/>
        <button>Submit</button>
       </form>
      </div>
    )
  }
}

export default Form;
