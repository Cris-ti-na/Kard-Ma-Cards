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