import React from 'react';
import {render} from 'react-dom';
import LeaguesList from './components/leaguesList';

let leagues = [
  {
    id: 1,
    name: 'test1',
    location: '4324234',
    members: 5,
    created: new Date()
  },
  {
    id: 2,
    name: 'test2',
    location: '6856456',
    members: 51,
    created: new Date()
  },
  {
    id: 3,
    name: 'test3',
    location: '45646546',
    members: 8,
    created: new Date()
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Leagues List</h1>
        <LeaguesList leagues={this.props.leagues} />
      </div>
    )
  }
}

render(<App leagues={leagues} />, document.getElementById('app'));
