const zipcodes = require('zipcodes');

class DocApi {
  constructor() {
    this.lastResponse = null;
    this.baseUrl = "https://api.betterdoctor.com/2016-03-01/doctors?";
  }

  call(params) {

    let zone = zipcodes.lookup(params['zip']);
    let range = params['range'];
    let location = `location=${zone.latitude}%2C${zone.longitude}%2C${range}`;
    let query = params['query'] ? `&query=${params['query']}` : "";
    let first_name = params['first_name'] ?  `&first_name=${params['first_name']}` : "";
    let last_name = params['last_name'] ?  `&last_name=${params['last_name']}` : "";
    let limit = params['limit'] ?  `&limit=${params['limit']}` : "";


    let promise = new Promise((resolve, reject) => {

      let request = new XMLHttpRequest();
      const url = `${this.baseUrl}${location}${query}${first_name}${last_name}${limit}&user_key=${process.env.API_KEY}`;

      console.log("pre-request url: " + url);
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          console.log(request.statusText);
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
    return promise;
  }

}

export { DocApi };
