import React, { Component } from "react";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";

const ViewRow = ({ id, title, completed, editRow }) => {
  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Checkbox slider />
      </Table.Cell>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>September 14, 2013</Table.Cell>
      <Table.Cell>September 03, 2014</Table.Cell>
      <Table.Cell>Not Completed</Table.Cell>
      <Table.Cell>
        <Button icon circular labelPosition='left' primary>
          Edit
        </Button>
      </Table.Cell>
      <Table.Cell>
        <Button icon labelPosition='left' circular color='red'>
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default ViewRow;
