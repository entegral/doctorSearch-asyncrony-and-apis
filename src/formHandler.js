let Ui = {

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
    select.append(finalOutput)
    return select;
  },

  createCard: function(document, doctor){
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.classList.add('doctor');
    cardDiv.classList.add('text-center');
    cardDiv.setAttribute("style", "width: 18rem;");
    cardDiv.innerHTML = `<div class="card-header">${doctor.name}</div>
      <div class="card-body">
        <h5 class="card-title">Market Capitilization Rank: ${doctor.rank}</h5>
        <p class="card-text">Price at open: ${doctor.open}</p>
        <p class="card-text">Price at close: ${doctor.close}</p>
        <p class="card-text">Daily High: ${doctor.high}</p>
        <p class="card-text">Daily Low: ${doctor.low}</p>
        <p class="card-text">24h Volume: ${doctor.volume}</p>
        <p class="card-text">Marketcap: ${doctor.marketcap}</p>
        <p class="card-text">${doctor.description}</p>
      </div>
      <div class="card-footer text-muted">
        <a href="${doctor.whitepaper.link}">Whitepaper</a>
      </div>`;
      document.getElementById('coinCards').append(cardDiv);

    return cardDiv;
  }


}
