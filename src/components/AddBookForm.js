import React, { Fragment } from "react";
import { Form, Button } from 'semantic-ui-react';

class AddBookForm extends React.Component {
  state = {
    title: '',
    author: '',
    img: '',
  }

  handleFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div class="sixteen wide column">
        <h1>Add a Book</h1>
        <Form onSubmit={e => {
            this.props.submitToParent(e, this.state)
            this.setState({
              title: '',
              author: '',
              img: '',
            })
          }}
        >
          <Form.Field>
            <label>
              <strong>Title: </strong>
              <input type="text" name="title" value={this.state.title} onChange={this.handleFormChange} placeholder="Book Title" />
            </label>
          </Form.Field>
          <Form.Field>
            <label>
              <strong>Author: </strong>
              <input type="text" name="author" value={this.state.author} onChange={this.handleFormChange} placeholder="Book Author" />
            </label>
            
          </Form.Field>
          <Form.Field>
            
            <label>
              <strong>Image URL: </strong>
              <input type="text" name="img" value={this.state.img} onChange={this.handleFormChange} placeholder="Book Image URL" />
            </label>
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default AddBookForm;
