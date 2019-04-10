import React from "react";

class Form extends React.Component {

  // Hold state - update form on change & be able to submit all of state
  state={
    id: '',
    title: '',
    author: '',
    img: ''
  }

  // Update title in state every time something is typed
  handleTitle = (e) => {
    this.setState({title: e.target.value})
  }
  // Update author in state every time something is typed
  handleAuthor = (e) => {
    this.setState({author: e.target.value})
  }

  // Update URL in state every time something is typed
  handleUrl = (e) => {
    this.setState({img: e.target.value})
  }

  // Invoke CB with this entire book object
  // Clear form once submitted
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState({
      id: '',
      title: '',
      author: '',
      img: ''
    })
  }

  // Render form with inputs for title, author, URL and submit button
  // Value and onChange for each input
  // Pass handleSubmit on the submit button
  render() {
    return (
      <div>
          <form style={{border: '5px solid', padding: '5px'}}>
            <h3>ADD A NEW BOOK</h3>
            <label>
              Title:
              <input type="text" name="title" value={this.state.title} onChange={this.handleTitle}/>
            </label>
            <br></br>
            <label>
              Author:
              <input type="text" name="author" value={this.state.author} onChange={this.handleAuthor}/>
            </label>
            <br></br>
            <label>
              Cover Page URL:
              <input type="text" name="img" value={this.state.img} onChange={this.handleUrl}/>
            </label>
            <br></br>
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
          </form>
      </div>
    )
  }
}

export default Form;
