import React, { Component } from "react";
import { Segment, Input, Button } from "semantic-ui-react";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAddTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ""
    });
  };
  render() {
    return (
      <div>
        <Segment inverted>
          <Input
            onChange={this.handleChange}
            type='text'
            name='title'
            value={this.state.title}
            placeholder='Add todo ...'
          />
          <Button
            onClick={this.handleAddTodo}
            icon
            labelPosition='left'
            color='green'
          >
            Add to do
          </Button>
        </Segment>
      </div>
    );
  }
}

export default AddTodo;
