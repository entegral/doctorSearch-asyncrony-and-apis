let UiHelper = {

  errorCard: function(document, error){
    console.log(error);
    const doctorCardDiv = document.getElementById('doctorCards');
    const p = document.createElement('p');

    p.innerHTML = "The system has returned an error, please try again.";
    doctorCardDiv.innerHTML = "";
    doctorCardDiv.append(p);
    return p;
  },

  noDoctors: function(document){
    const doctorCardDiv = document.getElementById('doctorCards');
    const p = document.createElement('p');

    p.innerHTML = "Your search returned no results. Try using different parameters.";
    doctorCardDiv.innerHTML = "";
    doctorCardDiv.append(p);
    return p;
  },

  printSpecialties: function(specialtyArray){
    let stringOutput = "";
    specialtyArray.forEach(function(specialty){
      stringOutput += "| " + specialty.actor + " ";
    });
    return stringOutput + "|";
  },


  createCard: function(document, clinic){
    const doctorCardDiv = document.getElementById('doctorCards');
    const cardDiv = document.createElement('div');
    console.log("starting on", clinic);
    cardDiv.classList.add('card');
    cardDiv.classList.add('doctor');
    cardDiv.classList.add('text-center');
    cardDiv.setAttribute("style", "width: 18rem;");
    cardDiv.innerHTML = `<div class="card-header">${clinic.profile.first_name} ${clinic.profile.last_name}</div>
    <img src="${clinic.profile.image_url}" alt="">
      <div class="card-body">
        <p class="card-text desc" style="display: block;">Click to Show Bio</p>
        <p class="card-text bio" style="display: none;">${clinic.profile.bio}</p>
        <p class="card-text specialties">${this.printSpecialties(clinic.specialties)}</p>
        <p class="card-text">${clinic.practices[0].accepts_new_patients ? "Accepting Patients" : "Not Accepting Patients"}</p>
        <h5 class="card-title">${clinic.practices[0].visit_address.city}, ${clinic.practices[0].visit_address.state}</h5>
        <p class="card-text">${clinic.practices[0].visit_address.street}</p>
        <p class="card-text">${clinic.practices[0].visit_address.zip}</p>
        <p class="card-text">${clinic.practices[0].phones[0].number}</p>
      </div>
      <div class="card-footer text-muted">
        <a href="${clinic.practices[0].website}">Website</a>
      </div>`;

    cardDiv.addEventListener('click', function() {
      let bio = cardDiv.querySelectorAll('.bio')[0];
      let desc = cardDiv.querySelectorAll('.desc')[0];
      console.log(bio);
      if (bio.style.display === "none") {
        bio.style.display = "block";
        desc.style.display = "none";
      } else {
        bio.style.display = "none";
        desc.style.display = "block";
      }
    });

    doctorCardDiv.append(cardDiv);

    return cardDiv;
  }


};

export { UiHelper };
