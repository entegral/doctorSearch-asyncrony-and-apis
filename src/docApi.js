class DocApi {
  constructor() {
    this.lastResponse = null;
    this.baseUrl = "https://api.betterdoctor.com/2016-03-01/doctors?";
  }

  call(params) {

    let location = 'location=or-portland';
    let query = `&query=${params['query']}`;
    let name = `&name=${params['name']}`;
    let limit = `&limit=${params['limit']}`;


    let promise = new Promise(function(resolve, reject) {

      let request = new XMLHttpRequest();

      const url = `${this.baseUrl}${location}${query}${name}${limit}${process.env.apiKey}`;

      // console.log("pre-request url: " + url);
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
