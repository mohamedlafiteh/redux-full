import React, { Component } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

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
    if (newTitle.length !== 0) {
      const updateTask = {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          title: newTitle
        }),
        headers: { "content-type": "application/json" }
      };

      fetch(`http://localhost:3010/tasks/${id}`, updateTask)
        .then(res => res.json())
        .then(data => {
          this.getTodos();
        });

      this.setState({
        selectedId: null,
        selected: false
      });
    } else {
      this.getTodos();
    }
  };

  cancelEdit = () => {
    this.setState({
      selectedId: null,
      selected: false
    });
  };

  deleteTask = id => {
    const deleteTask = {
      method: "DELETE",
      body: JSON.stringify({
        id: id
      }),
      headers: { "content-type": "application/json" }
    };
    fetch(`http://localhost:3010/tasks/${id}`, deleteTask)
      .then(res => res.json())
      .then(data => {
        this.getTodos();
      });
  };

  checkboxHandler = id => {
    console.log("checkbox" + id);
  };

  addTodo = title => {
    const newTodo = {
      method: "POST",
      body: JSON.stringify({
        title: title
      }),
      headers: { "content-type": "application/json" }
    };
    fetch("http://localhost:3010/tasks", newTodo)
      .then(res => res.json())
      .then(data => {
        this.getTodos();
      });
  };

  render() {
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />

        <Todos
          todos={this.state.todos}
          selectedId={this.state.selectedId}
          selected={this.state.selected}
          saveRow={this.saveRow}
          editRow={this.editRow}
          cancelEdit={this.cancelEdit}
          deleteTask={this.deleteTask}
          checkboxHandler={this.checkboxHandler}
        />
      </div>
    );
  }
}

export default Main;
