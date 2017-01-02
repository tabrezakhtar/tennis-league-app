import React from 'react';

class League extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
      <li onClick={e => this.handleClick(e)}>
        {this.props.league.name} {this.props.league.location} {this.props.league.members} {this.props.league.created.toString()}
      </li>
    );
  }
}

export default League;
