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
