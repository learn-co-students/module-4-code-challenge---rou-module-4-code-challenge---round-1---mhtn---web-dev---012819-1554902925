import React from "react";

class Form extends React.Component {

  state = {
    value: ''
  }

  // handleChange = (e) => {
  // }
  //
  // handleSubmit = (e) => {
  //   event.preventDefault()
  // }


  render() {
    return (
      <h1>{/*create form*/}</h1>
      // <form>
      //   <input type="text" value={this.state.value} onChange={this.handleChange} name="title" placeholder="title" />
      //   <input type="text" value={this.state.value} onChange={this.handleChange} name="author" placeholder="author" />
      //   <input type="text" value={this.state.value} onChange={this.handleChange} name="img" placeholder="img" />
      //   <button>Submit<button/>
      // </form>
    )
  }
}

export default Form;
