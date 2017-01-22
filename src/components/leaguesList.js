import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import League from './league';

class LeaguesList extends React.Component {
  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Location</TableHeaderColumn>
            <TableHeaderColumn>Members</TableHeaderColumn>
            <TableHeaderColumn>Date Created</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={ true }>
          {this.props.leagues.map(league => {
            return <League league={league} key={league.id} />;
          })}
        </TableBody>
      </Table>
    );
  }
}

export default LeaguesList;
