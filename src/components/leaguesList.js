import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import League from './league';

class LeaguesList extends React.Component {
  render() {
    return (
      <div>
        <RaisedButton label="Default" />
        <ul>
          {this.props.leagues.map(league => {
            return <League league={league} key={league.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default LeaguesList;
