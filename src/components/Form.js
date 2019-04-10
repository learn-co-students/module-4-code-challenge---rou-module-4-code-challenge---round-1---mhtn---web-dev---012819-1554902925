import React from "react";

class Form extends React.Component {

  //need to have state here to collect data inputted by user
  //has to be a class

  state = {
    title: '',
    author: '',
    img: ''
  }

  handleChange = (e) => {
    // console.log('input', e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
    //[e.target.name] takes care of all title, author, img in one foul swoop. it looks for the name of each input which I added in the form
  }

  handleSubmitForm = (e) => {
    //get rid of that auto refresh ya know
    e.preventDefault();
    // console.log('submit');
    this.props.handleSubmit(this.state)
    //sends the whole state back up to BookList so it can render it

  }

  //submit on the form so it gets all the inputs

  //doesn't have to persist so don't need to add a post method for backend

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <input type="text" name="title" placeholder="title" onChange={this.handleChange} value={this.state.title}/>
          <input type="text" name="author" placeholder="author" onChange={this.handleChange} value={this.state.author}/>
          <input type="text" name="img" placeholder="image" onChange={this.handleChange}  value={this.state.img}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
