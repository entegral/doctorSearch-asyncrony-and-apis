import { DocApi } from './docApi';
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
      params.name = document.getElementById('name').value;


      let searchPromise = api.call(params);

      searchPromise
        .then(function(unparsedApiResponse){
          api.lastResponse = JSON.parse(unparsedApiResponse);

        });
    });
  }
});
