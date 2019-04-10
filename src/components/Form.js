import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  titleOnChange = (e) => {
    const title = e.target.value
    this.setState({title})
  }

  authorOnChange = (e) => {
    const author = e.target.value
    this.setState({author})
  }

  imageOnChange = (e) => {
    const img = e.target.value
    this.setState({img})
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setInitialState()
  }

  setInitialState = () => {
    this.setState({title: ''})
    this.setState({author: ''})
    this.setState({img: ''})
  }


  render() {
    return(
      <form>
        <input type="text" name="title" placeholder="title" onChange={this.titleOnChange} value={this.state.title} />
        <input type="text" name="author" placeholder='author' onChange={this.authorOnChange} value={this.state.author} />
        <input type="text" name="img" placeholder='img' onChange={this.imageOnChange} value={this.state.img} />
        <button onClick={(e)=> this.handleClick(e)}>Submit</button>
      </form>

    )
  }
}

export default Form;
