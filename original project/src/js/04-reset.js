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
