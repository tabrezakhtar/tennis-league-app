import React from 'react';
import 'whatwg-fetch';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LeaguesList from './components/leaguesList';
import LeagueDetail from './components/leagueDetail';
import TopMenu from './components/topMenu';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      leagues: []
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TopMenu />
          <LeaguesList leagues={this.state.leagues} />
          <LeagueDetail />
        </div>
      </MuiThemeProvider>
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

injectTapEventPlugin();
render(<App />, document.getElementById('app'));
