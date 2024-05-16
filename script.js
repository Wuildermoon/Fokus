const html = document.querySelector('html');
const buttonEnfoque = document.querySelector(".app__card-button--enfoque");
const buttonCorto = document.querySelector(".app__card-button--corto");
const buttonLargo = document.querySelector(".app__card-button--largo");
const banner = document.querySelector(".app__image");
const title = document.querySelector(".app__title");
const buttons = document.querySelectorAll(".app__card-button");
const inputPlayOrPauseMusic = document.querySelector("#alternar-musica");
const music = new Audio("/sonidos/luna-rise-part-one.mp3");
const buttonPlayPause = document.querySelector("#start-pause");
const soundfinishedTime = new Audio("/sonidos/beep.mp3");
const soundPause = new Audio("/sonidos/pause.mp3");
const soundPlay = new Audio("/sonidos/play.wav");

let remainingTimeInSeconds = 5;
let idInterval = null;

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

const coutdown = () => {
    if (remainingTimeInSeconds <= 0){
        soundfinishedTime.play();
        restart();  
        alert("Tiempo finalizado");
        return;
    }
    remainingTimeInSeconds -= 1;
    console.log("Temporizador: " + remainingTimeInSeconds);
}

buttonPlayPause.addEventListener("click", startPause);

function startPause(){
    if (idInterval) {
        soundPause.play();
        restart();
        return;
    }
    soundPlay.play();
    idInterval = setInterval(coutdown, 1000);
}

function restart(){
    clearInterval(idInterval);
    idInterval = null;
}