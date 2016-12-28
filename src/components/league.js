import React from 'react';

const League = ({league}) =>
  <li>
    {league.name} {league.location} {league.members} {league.created.toString()}
  </li>;

export default League;
