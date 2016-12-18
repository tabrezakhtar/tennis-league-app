'use strict';

import * as LeagueTemplate from './league-template';

export default class league {
  constructor(leagues) {
    this.leagues = leagues;
  }

  render() {
    const leaguesListFragment = document.createDocumentFragment();
    let table = LeagueTemplate.table();
    table.appendChild(LeagueTemplate.thead());
    let tbody = LeagueTemplate.tbody();

    for (const league of this.leagues) {
      tbody.appendChild(
        LeagueTemplate.row(league)
      );
    }

    table.appendChild(tbody);
    leaguesListFragment.appendChild(table);

    document.getElementById('leaguesList').appendChild(leaguesListFragment);

    this.addEventListeners();
  }

  addEventListeners() {
    let leagueRows = document.querySelectorAll('.leagueRow');
    for (const row of leagueRows) {
      row.addEventListener('click', e => {
        document.querySelectorAll('.leagueRow').forEach(row => {
          row.className = 'leagueRow';
        });
        e.currentTarget.className += ' is-selected';
        const leagueData = this.leagues.find(league => league.id === parseInt(e.currentTarget.dataset.id, 10));
        dispatchEvent(new CustomEvent('leagueRowClicked', {detail: leagueData}));
      }, false);
    }
  }
}
