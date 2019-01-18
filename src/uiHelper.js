let UiHelper = {

  renderDropdown: function(coinsArray){
    let finalOutput = "";
    let tempCoin;
    let select = document.createElement("select");
    select.setAttribute("id", "coinSelect");

    for (let i = 1; i < 51; i++){
      tempCoin = this.findCoinByRank(coinsArray, i);
      let tempOption = document.createElement("option");
      tempOption.innerHTML = tempCoin.name;
      tempOption.setAttribute("value", tempCoin.id);
      select.appendChild(tempOption);
    }
    select.append(finalOutput);
    return select;
  },

  createCard: function(document, clinic){
    let cardDiv = document.createElement('div');
    console.log("starting on", clinic);
    cardDiv.classList.add('card');
    cardDiv.classList.add('doctor');
    cardDiv.classList.add('text-center');
    cardDiv.setAttribute("style", "width: 18rem;");
    cardDiv.innerHTML = `<div class="card-header">${clinic.profile.first_name} ${clinic.profile.last_name}</div>
    <img src="${clinic.profile.image_url}" alt="">
      <div class="card-body">
        <p class="card-text">${clinic.profile.bio}</p>
        <h5 class="card-title">${clinic.practices[0].visit_address.city}, ${clinic.practices[0].visit_address.state}</h5>
        <p class="card-text">${clinic.practices[0].visit_address.street}</p>
        <p class="card-text">${clinic.practices[0].visit_address.zip}</p>
        <p class="card-text">${clinic.practices[0].phones[0].number}</p>
      </div>
      <div class="card-footer text-muted">
        <a href="${clinic.practices[0].website}">Website</a>
      </div>`;
    document.getElementById('doctorCards').append(cardDiv);

    return cardDiv;
  }


};

export { UiHelper };
