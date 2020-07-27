'use strict';

// GENERAR URL DE LA TARJETA
const responseURL = document.querySelector('.response');

function sendData(ev) {
  ev.preventDefault();
  sendRequest(infoPerson);
}

function sendRequest(json) {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
      twitterContainer.classList.remove('hidden');
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showURL(result) {
  const child = document.querySelector('.child');
  if (result.success) {
    responseURL.innerHTML =
      '<a href=' +
      result.cardURL +
      " target='_blank' rel='noopener noreferrer'>" +
      result.cardURL +
      '</a>';

    const tweet = 'Hola Adalaber, aquí tienes tu tarjeta de presentación! 🌸';
    twitterButton.setAttribute(
      'href',
      `https://twitter.com/intent/tweet?url=${tweet} ${result.cardURL}`
    );
    twitterButton.setAttribute('target', '_blank');
    twitterButton.appendChild(child);
  } else {
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}

//LOCAL STORAGE
const recoverInfo = () => {
  const local = localStorage.getItem('infoPerson');
  const dataLocal = JSON.parse(local);
  if (dataLocal !== null) {
    infoPerson.fullName = dataLocal.name;
    fullName.value = dataLocal.name;
    handleUpdateFullName();

    infoPerson.job = dataLocal.job;
    job.value = dataLocal.job;
    handleUpdateJob();

    infoPerson.email = dataLocal.email;
    email.value = dataLocal.email;
    handleUpdateEmail();

    phone.value = dataLocal.phone;
    infoPerson.phone = dataLocal.phone;
    handleUpdateTelephone();

    infoPerson.photo = dataLocal.photo;
    maxImg.style.backgroundImage = `url(${dataLocal.photo})`;
    miniImg.style.backgroundImage = `url(${dataLocal.photo})`;


    infoPerson.linkedin = dataLocal.linkedin;
    linkedIn.value = dataLocal.linkedin;
    handleUpdateLinkedIn();

    gitHub.value = dataLocal.github;
    infoPerson.github = dataLocal.github;
    handleUpdateGitHub();
  }
};
recoverInfo();

