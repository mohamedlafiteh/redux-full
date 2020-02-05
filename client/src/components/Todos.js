import React from "react";
import EditRow from "./EditRow";
import ViewRow from "./ViewRow";

import { Checkbox, Icon, Table } from "semantic-ui-react";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Table celled compact definition>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Date Added</Table.HeaderCell>
            <Table.HeaderCell>Due Date</Table.HeaderCell>

            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.todos.map(todo => {
            if (todo.id === this.props.selectedId) {
              return (
                <EditRow
                  key={todo.id}
                  saveRow={this.props.saveRow}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                  cancelEdit={this.props.cancelEdit}
                />
              );
            } else {
              return (
                <ViewRow
                  key={todo.id}
                  editRow={this.props.editRow}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                />
              );
            }
          })}
        </Table.Body>
      </Table>
    );
  }
}

export default Todos;
