'use strict';

import HttpService from './http-service';

export default class leagueService {
  getAllLeagues() {
    return new Promise((resolve, reject) => {
      let httpService = new HttpService();
      httpService.get('/api/league').then(leagues => {
        resolve(leagues);
      })
      .catch(err => {
        console.error('Error getting leagues', err.statusText);
      });
    });
  }
}
