import React from 'react';
import 'whatwg-fetch';
import {render} from 'react-dom';
import LeaguesList from './components/leaguesList';
import LeagueDetail from './components/leagueDetail';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      leagues: []
    };
  }

  render() {
    return (
      <div>
        <h1>Leagues List</h1>
        <LeaguesList leagues={this.state.leagues} />
        <LeagueDetail />
      </div>
    );
  }

  componentDidMount() {
    fetch('/api/league')
      .then(response => {
        return response.json();
      }).then(json => {
        this.setState({leagues: json});
      }).catch(err => {
        console.log('error', err);
      });
  }
}

render(<App />, document.getElementById('app'));
