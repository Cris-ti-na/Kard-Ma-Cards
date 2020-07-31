'use strict';

const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const miniImg = document.querySelector('.js__profile-image');
const maxImg = document.querySelector('.js__profile-preview');

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */

function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  infoPerson.photo = fr.result;
  localStorage.setItem('infoPerson', JSON.stringify(infoPerson));
  miniImg.style.backgroundImage = `url(${fr.result})`;
  maxImg.style.backgroundImage = `url(${fr.result})`;
}

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
  fileField.click();
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);

'use strict';
//OBJETO
let infoPerson = {
  palette: 0, //antes colorSelected
  name: '',
  job: '',
  photo: '',
  email: '',
  phone: '', //antes telephone
  linkedin: '', //antes linkedIn
  github: '', //antes gitHub
};

//VARIABLES
const resetButton = document.querySelector('.reset__button-js');
const submitButton = document.querySelector('.article__share__button');
const paletteA = document.querySelector('.color1-js');
const paletteB = document.querySelector('.color2-js');
const paletteC = document.querySelector('.color3-js');
const fullName = document.querySelector('.fullName-js');
const job = document.querySelector('.job-js');
const selectImagen = document.querySelector('.addImage-js');
const email = document.querySelector('.email-js');
const telephone = document.querySelector('.telephone-js');
const linkedIn = document.querySelector('.linkedIn-js');
const gitHub = document.querySelector('.gitHub-js');
const previewFullName = document.querySelector('.previewFullName-js');
const previewJob = document.querySelector('.previewJob-js');
const previewTelephone = document.querySelector('.previewTelephone-js');
const previewEmail = document.querySelector('.previewEmail-js');
const previewLinkedIn = document.querySelector('.previewLinkedIn-js');
const previewGitHub = document.querySelector('.previewGitHub-js');
const previewIcon1 = document.querySelector('.previewIconBorder1-js');
const previewIcon2 = document.querySelector('.previewIconBorder2-js');
const previewIcon3 = document.querySelector('.previewIconBorder3-js');
const previewIcon4 = document.querySelector('.previewIconBorder4-js');
const formOpenDesign = document.querySelector('.form__open__design');
const formCloseDesign = document.querySelector('.form__closed__design');
const divArrowDesign = document.querySelector('.form__arrow--design');
const formOpenFill = document.querySelector('.form__open__fill');
const formCloseFill = document.querySelector('.form__closed__fill');
const divArrowFill = document.querySelector('.form__arrow--fill');
const formOpenShare = document.querySelector('.form__open__share');
const formCloseShare = document.querySelector('.form__closed__share');
const divArrowShare = document.querySelector('.form__arrow--share');
const startButton = document.querySelector('.container__btn-js');
const previewCard = document.querySelector('.preview');
const palettes = document.querySelectorAll('.palette-js');
const steps = document.querySelectorAll('.steps-js');
const twitterContainer = document.querySelector('.article__share__create');
const twitterButton = document.querySelector('.article__twitter__button');

//METE EL VALOR DE LOS INPUTS EN EL OBJETO
function valueInput() {
  infoPerson.name = fullName.value;
  infoPerson.job = job.value;
  infoPerson.email = email.value;
  infoPerson.phone = Number(telephone.value);
  infoPerson.linkedin = linkedIn.value;
  infoPerson.github = gitHub.value;
  localStorage.setItem('infoPerson', JSON.stringify(infoPerson));
}

//LISTENERS
fullName.addEventListener('keyup', valueInput);
job.addEventListener('keyup', valueInput);
selectImagen.addEventListener('change', valueInput);
email.addEventListener('keyup', valueInput);
telephone.addEventListener('keyup', valueInput);
linkedIn.addEventListener('keyup', valueInput);
gitHub.addEventListener('keyup', valueInput);

//CERRAR DESIGN SECTION
function hideDesign() {
  formOpenDesign.classList.toggle('hidden');
  divArrowDesign.classList.toggle('closed');
}
formCloseDesign.addEventListener('click', hideDesign);

//CERRAR FILL SECTION
function hideFill() {
  formOpenFill.classList.toggle('hidden');
  divArrowFill.classList.toggle('closed');
}
formCloseFill.addEventListener('click', hideFill);

//CERRAR SHARE SECTION
function hideShare() {
  formOpenShare.classList.toggle('hidden');
  divArrowShare.classList.toggle('closed');
}
formCloseShare.addEventListener('click', hideShare);
// FUNCION PARA RELLENAR PREVIEW -- NAME
function handleUpdateFullName() {
  infoPerson.name = fullName.value;
  previewFullName.innerHTML =
    infoPerson.name === '' ? 'Nombre Apellido' : infoPerson.name;
}

// FUNCION PARA RELLENAR PREVIEW -- JOB
function handleUpdateJob() {
  infoPerson.job = job.value;
  previewJob.innerHTML =
    infoPerson.job === '' ? 'Front-end developer' : infoPerson.job;
}

// FUNCION PARA RELLENAR PREVIEW -- EMAIL
function handleUpdateEmail() {
  infoPerson.email = email.value;
  const emailFilled = email.value;
  return (previewEmail.href = 'mailto:' + emailFilled);
}

// FUNCION PARA RELLENAR PREVIEW -- TELEFONO
function handleUpdateTelephone() {
  infoPerson.phone = telephone.value;
  const telephoneFilled = telephone.value;
  return (previewTelephone.href = 'tel:' + telephoneFilled);
}

// FUNCION PARA RELLENAR PREVIEW -- LINKEDIN
function handleUpdateLinkedIn() {
  infoPerson.linkedin = linkedIn.value;
  const linkedInFilled = linkedIn.value;
  return (previewLinkedIn.href = `https://www.linkedin.com/in/${linkedInFilled}`);
}

// FUNCION PARA RELLENAR PREVIEW -- GITHUB
function handleUpdateGitHub() {
  infoPerson.github = gitHub.value;
  const gitHubFilled = gitHub.value;
  return (previewGitHub.href = `https://github.com/${gitHubFilled}`);
}

// LISTENERS
fullName.addEventListener('keyup', handleUpdateFullName);
job.addEventListener('keyup', handleUpdateJob);
email.addEventListener('keyup', handleUpdateEmail);
telephone.addEventListener('keyup', handleUpdateTelephone);
linkedIn.addEventListener('keyup', handleUpdateLinkedIn);
gitHub.addEventListener('keyup', handleUpdateGitHub);


//CAMBIAR LOS COLORES CON LAS PALETAS
function changeColors(event) {
  previewCard.classList.remove('palette1-js');
  previewCard.classList.remove('palette2-js');
  previewCard.classList.remove('palette3-js');
  infoPerson.palette = Number(event.target.value);
  previewCard.classList.add(`palette${infoPerson.palette}-js`);
}
for (const palette of palettes) {
  palette.addEventListener('change', changeColors);
}

'use strict';

//FUNCION PARA RESETEAR FORMULARIO
function resetForm() {
  infoPerson.palette = 0;
  infoPerson.name = '';
  infoPerson.job = '';
  infoPerson.photo = '';
  infoPerson.email = '';
  infoPerson.phone = '';
  infoPerson.linkedin = '';
  infoPerson.github = '';
  fullName.value = '';
  job.value = '';
  email.value = '';
  telephone.value = '';
  linkedIn.value = '';
  gitHub.value = '';
  previewFullName.innerHTML = 'Nombre Apellido';
  previewJob.innerHTML = 'Front-End Developer';
  localStorage.removeItem('infoPerson');
  submitButton.setAttribute('disabled', 'disabled');
  twitterContainer.classList.add('hidden');
}

function resetImgPreview() {
  maxImg.style.backgroundImage = ``;
  miniImg.style.backgroundImage = ``;
}

function resetComplete(event) {
  resetForm();
  resetImgPreview();
}

resetButton.addEventListener('click', resetComplete);

'use strict';
//LISTENERS
fullName.addEventListener('keyup', () => {
  valueInput();
  validateForm();
});
job.addEventListener('keyup', () => {
  valueInput();
  validateForm();
});
selectImagen.addEventListener('change', () => {
  valueInput();
  validateForm();
});
email.addEventListener('keyup', () => {
  valueInput();
  validateForm();
});
telephone.addEventListener('keyup', () => {
  valueInput();
  validateForm();
});
linkedIn.addEventListener('keyup', () => {
  valueInput();
  validateForm();
});
gitHub.addEventListener('keyup', () => {
  valueInput();
  validateForm();
});
resetButton.addEventListener('click', resetForm);

// FUNCIÓN PARA VALIDAR EL FORMULARIO:

function validateForm() {
  if (
    infoPerson.name.length < 1 ||
    infoPerson.job.length < 1 ||
    infoPerson.photo.length < 1 ||
    infoPerson.email.length < 1 ||
    infoPerson.phone.length < 1 ||
    infoPerson.linkedin.length < 1 ||
    infoPerson.github.length < 1
  ) {
    submitButton.setAttribute('disabled', 'disabled');
  } else {
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove('cursor__btn__submit');
  }
}

submitButton.addEventListener('click', sendData);
window.addEventListener('load', validateForm);

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


//# sourceMappingURL=main.js.map
