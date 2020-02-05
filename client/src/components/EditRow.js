import React, { Component } from "react";
import { Button, Checkbox, Icon, Table, Input } from "semantic-ui-react";

export class EditRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTask: props.title
    };
  }

  onChangeValue = event => {
    this.setState({
      [`${event.target.name}Task`]: event.target.value
    });
  };
  saveChange = e => {
    e.preventDefault();

    this.props.saveRow(this.props.id, this.state.editTask);
    this.setState({
      editTask: ""
    });
  };

  render() {
    //const { id, saveRow, title, completed } = this.props;
    return (
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>
          <Input
            focus
            type='text'
            name='edit'
            value={this.state.editTask}
            onChange={this.onChangeValue}
          />
        </Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>September 03, 2014</Table.Cell>
        <Table.Cell>Not Completed</Table.Cell>
        <Table.Cell>
          <Button
            onClick={this.saveChange}
            icon
            circular
            labelPosition='left'
            primary
          >
            Save
          </Button>
        </Table.Cell>
        <Table.Cell>
          <Button
            onClick={this.props.cancelEdit}
            icon
            labelPosition='left'
            circular
            color='red'
          >
            Cancel
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default EditRow;
