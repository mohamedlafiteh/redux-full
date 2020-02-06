import React from "react";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";

const ViewRow = ({
  id,
  title,
  completed,
  editRow,
  deleteTask,
  checkboxHandler
}) => {
  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Checkbox slider onChange={() => checkboxHandler(id)} />
      </Table.Cell>
      <Table.Cell
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {title}
      </Table.Cell>
      <Table.Cell>September 14, 2013</Table.Cell>
      <Table.Cell>September 03, 2014</Table.Cell>
      {completed ? (
        <Table.Cell>Completed</Table.Cell>
      ) : (
        <Table.Cell>Not completed</Table.Cell>
      )}
      <Table.Cell>
        <Button
          onClick={() => editRow(id)}
          icon
          circular
          labelPosition='left'
          primary
        >
          Edit
        </Button>
      </Table.Cell>
      <Table.Cell>
        <Button
          onClick={() => deleteTask(id)}
          icon
          labelPosition='left'
          circular
          color='red'
        >
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default ViewRow;
