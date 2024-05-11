const html = document.querySelector('html');
const buttonEnfoque = document.querySelector(".app__card-button--enfoque");
const buttonCorto = document.querySelector(".app__card-button--corto");
const buttonLargo = document.querySelector(".app__card-button--largo");

buttonEnfoque.addEventListener("click", () => {
    html.setAttribute("data-contexto", "enfoque");
})

buttonCorto.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-corto");
})

buttonLargo.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-largo");
})