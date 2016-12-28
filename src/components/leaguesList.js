import React from 'react';
import League from './league';

class LeaguesList extends React.Component {
  render() {
    return (
      <div>
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
