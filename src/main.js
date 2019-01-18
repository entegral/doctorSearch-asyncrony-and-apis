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
      params.limit = 10;
      params.first_name = document.getElementById('first_name').value;
      params.last_name = document.getElementById('last_name').value;

      // api.lastResponse = test;
      // console.log(api.lastResponse);
      //
      // for (let i = 0; i < 10; i++){
      //   let clinic = api.lastResponse.data[i];
      //   UiHelper.createCard(document, clinic);
      //
      // }


      let searchPromise = api.call(params);
      searchPromise
        .then(function(unparsedApiResponse){
          api.lastResponse = JSON.parse(unparsedApiResponse);

          if (unparsedApiResponse instanceof Error){
            UiHelper.errorCard(document, unparsedApiResponse);
          }
          else if (api.lastResponse.data.length === 0) {
            UiHelper.noDoctors(document);
          }
          else {
            console.log(api.lastResponse);
            document.getElementById('doctorCards').innerHTML = '';

            for (let i = 0; i < api.lastResponse.data.length; i++){
              let clinic = api.lastResponse.data[i];
              UiHelper.createCard(document, clinic);
            }
          }

        });


    });
  }
});
