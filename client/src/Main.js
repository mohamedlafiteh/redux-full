import React, { Component } from "react";
import Todos from "./components/Todos";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    fetch("http://localhost:3010/")
      .then(res => res.json())
      .then(data => {
        this.setState({
          todos: data
        });
      });
  };
  render() {
    return (
      <div>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default Main;
