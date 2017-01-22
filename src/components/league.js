import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class League extends React.Component {
  handleClick() {
    console.log('row click:', this);
  }

  render() {
    return (
      <TableRow onClick={e => this.handleClick(e)}>
        <TableRowColumn>{this.props.league.name}</TableRowColumn>
        <TableRowColumn>{this.props.league.location}</TableRowColumn>
        <TableRowColumn>{this.props.league.members}</TableRowColumn>
        <TableRowColumn>{this.props.league.created.toString()}</TableRowColumn>
      </TableRow>
    );
  }
}

export default League;
