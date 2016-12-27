import React from 'react';
import League from './league';

class LeaguesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leagues: props.leagues
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.leagues.map((league) => {
            return <League league={league} key={league.id} />
          })}
        </ul>
      </div>
    )
  }
}

export default LeaguesList;
