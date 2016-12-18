'use strict';

export default class HttpService {
  get(url) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          resolve(JSON.parse(request.responseText));
        } else {
          console.log('Error', request.statusText);
          reject({status: request, statusText: request.statusText});
        }
      };

      request.onerror = () => {
        console.log('ajax error');
        reject({status: request, statusText: request.statusText});
      };

      request.send();
    });
  }
}
