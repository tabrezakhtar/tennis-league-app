'use strict';

import * as LeagueDetailTemplate from './league-detail-template';

export default class league {
  constructor(leagueDetail) {
    this.leagueDetail = leagueDetail;
    document.getElementById('leagueDetail').innerHTML = '';
  }

  render() {
    let leagueDetailFrom = LeagueDetailTemplate.leagueDetailForm(
      this.leagueDetail.name,
      this.leagueDetail.location,
      this.leagueDetail.members,
      this.leagueDetail.created
    )

    document.getElementById('leagueDetail').appendChild(leagueDetailFrom);
    this.addEventListeners();
  }

  addEventListeners() {
  }
}
