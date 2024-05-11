const html = document.querySelector('html');
const buttonEnfoque = document.querySelector(".app__card-button--enfoque");
const buttonCorto = document.querySelector(".app__card-button--corto");
const buttonLargo = document.querySelector(".app__card-button--largo");
const banner = document.querySelector(".app__image");
const title = document.querySelector(".app__title");

buttonEnfoque.addEventListener("click", () => {
    changeContext("enfoque")
})

buttonCorto.addEventListener("click", () => {
    changeContext("descanso-corto")
})

buttonLargo.addEventListener("click", () => {
    changeContext("descanso-largo")
})

function changeContext(context){
    html.setAttribute("data-contexto", context);
    banner.setAttribute("src", `/imagenes/${context}.png`);
    switch (context) {
        case "enfoque":
            title.innerHTML = `
            Optimiza tu productividad,<br>
                <strong class="app__title-strong">Sumérgete en lo que importa.</strong>
            `
            break;
        case "descanso-corto":
            title.innerHTML = `
            ¿Qué tal tomar un respiro?,<br>
                <strong class="app__title-strong">¡Haz una pausa corta.</strong>
            `
            break;
        case "descanso-largo":
            title.innerHTML = `
            Hora de volver a la superficie,<br>
                <strong class="app__title-strong">Haz una pausa larga.</strong>
            `
            break;
        default:
            break;
    }
}