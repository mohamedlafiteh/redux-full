import React, { Component } from "react";
import Todos from "./components/Todos";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      selectedId: null,
      selected: false
    };
  }

  editRow = id => {
    this.setState({
      selectedId: id,
      selected: true
    });
  };

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

  saveRow = (id, newTitle) => {
    console.log(id, newTitle);
    this.setState({
      selectedId: null,
      selected: false
    });
  };

  cancelEdit = () => {
    console.log("clicked");
    this.setState({
      selectedId: null,
      selected: false
    });
  };

  render() {
    return (
      <div>
        <Todos
          todos={this.state.todos}
          selectedId={this.state.selectedId}
          selected={this.state.selected}
          saveRow={this.saveRow}
          editRow={this.editRow}
          cancelEdit={this.cancelEdit}
        />
      </div>
    );
  }
}

export default Main;
