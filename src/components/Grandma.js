'use strict';

let grandmaChat = document.querySelector('.grandma-chat');
let grandmaContainer = document.querySelector('.grandma-chat__container');
const grandmaBot = document.querySelector('.grandma-bot');

//  FRASES
/* HOVER */
const hooverBot = [
    `"El futuro les pertenece a quienes creen en la belleza de JavaScript" (Eleanor Roosvelt)`,
    `"Me lo contaron y lo olvidé, Lo vi y lo entendí. Hice la evaluación de los Pokemon y lo aprendí" (Confucio)`,
    `"Me gusta cuando programas, porque estás como ausente" (Pablo Neruda)`,
    `"El proyecto cambia con tus commits, no con tu opinión" (Paulo Coelho)`,
    `"Por mis props, ¿dónde encaja esto en React?" => "Por mis props,  estoy llegando a la iluminación en React" (Budha)`,
    `"Los arrays ni se crean ni se destruyen, solo se recorren" (Antoine Lavoisier)`,
    `"Stack Overflow es el alivio de las miserias para los que las sufren despiertos" (Miguel de Cervantes, don Programer de la Mancha)`,
    `"Vive hoy como si fueras a hacer merge mañana" (Mahatma Gandhi)`,
    `"Lo que puedas compilar hoy, no lo compiles mañana" (Benjamin Franklin)`,
    `"Más sabe el fetch por viejo que por fetch, asincrónicamente hablando" (Frontend anónimo)`,
    `"if(!mahoma.goToMountain()){.mountain.goToMahoma() }" (Francis Bacon)`,
    `"Sólo hay tres cosas infinitas: el universo, la estupidez humana y while(true) {}" (Albert Einstein)`,
    `"A código compilado no le mires los warnings" (Frontend Anónimo)`,
    `"Programo ergo sum" (René Descartes)`,
    `Keyboard is not available - Press F1 to continue`,
];

// RANDOM
function randomN(max) {
    return Math.floor(Math.random() * max);
}

// ACCIÓN (aparece burbuja, salta la frase, se reproduce el gif, desaparece la burbuja)
function grandmaTalk(text, seconds) {
// Aparece burbuja
    grandmaBot.classList.add('talk');
    grandmaContainer.classList.add('fadein');
    // Texto
    grandmaChat.innerHTML = text[randomN(text.length)];
    // Desaparcer burbuja
    setTimeout(function () {
    grandmaContainer.classList.add('fadeout');
    grandmaContainer.classList.remove('fadein');
    grandmaBot.classList.remove('talk');
    }, seconds);
}

// DETONANTE DE LA ACCIÓN
if (grandmaBot) {
    grandmaBot.addEventListener('mouseover', function () {
    grandmaTalk(hooverBot, 4000);
    });
}