'use strict';

import LeagueComponent from './components/league';
import LeagueService from './league-service';
import LeagueDetailComponent from './components/league-detail';

(() => {
  const leagueService = new LeagueService();
  leagueService.getAllLeagues().then(leagues => {
    const leagueComponent = new LeagueComponent(leagues);
    leagueComponent.render();

    // trigger material javascript
    if (!(typeof (componentHandler) === 'undefined')) {
      componentHandler.upgradeAllRegistered();
    }

    addEventListener('leagueRowClicked', e => {
      const leagueDetailComponent = new LeagueDetailComponent(e.detail);
      leagueDetailComponent.render();
    }, false);
  });
})();
