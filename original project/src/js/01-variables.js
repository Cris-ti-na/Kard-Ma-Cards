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
  github: '', //antes gitHubZ
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
