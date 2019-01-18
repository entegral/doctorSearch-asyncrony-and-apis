import { DocApi } from './docApi';
import { UiHelper } from './uiHelper';
import { test } from './dummyApiData';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';


let api = new DocApi();

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {



    let doctorForm = document.getElementById('doctorForm');

    doctorForm.addEventListener('submit', function(event){
      event.preventDefault();
      let params = {};
      params.query = document.getElementById('ailment').value;
      // params.name = document.getElementById('name').value;

      api.lastResponse = test;
      console.log(api.lastResponse);

      for (let i = 0; i < 10; i++){
        let clinic = api.lastResponse.data[i];
        UiHelper.createCard(document, clinic);

      }


      // let searchPromise = api.call(params);
      // searchPromise
      //   .then(function(unparsedApiResponse){
      //     api.lastResponse = JSON.parse(unparsedApiResponse);
      //
      //   });
    });
  }
});
