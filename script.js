const html = document.querySelector('html');
const buttonEnfoque = document.querySelector(".app__card-button--enfoque");
const buttonCorto = document.querySelector(".app__card-button--corto");
const buttonLargo = document.querySelector(".app__card-button--largo");
const banner = document.querySelector(".app__image");
const title = document.querySelector(".app__title");
const buttons = document.querySelectorAll(".app__card-button");
const inputPlayOrPauseMusic = document.querySelector("#alternar-musica");
const music = new Audio('/sonidos/luna-rise-part-one.mp3');

music.loop = true;

inputPlayOrPauseMusic.addEventListener("change", () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
})

buttonEnfoque.addEventListener("click", () => {
    changeContext("enfoque")
    buttonEnfoque.classList.add("active");
})

buttonCorto.addEventListener("click", () => {
    changeContext("descanso-corto")
    buttonCorto.classList.add("active");
})

buttonLargo.addEventListener("click", () => {
    changeContext("descanso-largo")
    buttonLargo.classList.add("active");
})

function changeContext(context){
    buttons.forEach(function(context){
        context.classList.remove("active");
    });

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