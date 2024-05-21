const html = document.querySelector('html');
const title = document.querySelector(".app__title");
const banner = document.querySelector(".app__image");
const buttons = document.querySelectorAll(".app__card-button");
const buttonEnfoque = document.querySelector(".app__card-button--enfoque");
const buttonCorto = document.querySelector(".app__card-button--corto");
const buttonLargo = document.querySelector(".app__card-button--largo");
const screenTime = document.querySelector("#timer");
const inputPlayOrPauseMusic = document.querySelector("#alternar-musica");
const buttonPlayPause = document.querySelector("#start-pause");
const imgButtonPlayPause = document.querySelector("#start-pause img");
const textButtonPLayPause = document.querySelector("#start-pause span");
const soundfinishedTime = new Audio("/sonidos/beep.mp3");
const music = new Audio("/sonidos/luna-rise-part-one.mp3");
const soundPause = new Audio("/sonidos/pause.mp3");
const soundPlay = new Audio("/sonidos/play.wav");

let remainingTimeInSeconds = 1500;
let idInterval = null;

music.loop = true;

inputPlayOrPauseMusic.addEventListener("change", () => {

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }

});

buttonEnfoque.addEventListener("click", () => {

    changeContext(1500, "enfoque", buttonEnfoque);

});

buttonCorto.addEventListener("click", () => {

    changeContext(300, "descanso-corto", buttonCorto);

});

buttonLargo.addEventListener("click", () => {

    changeContext(900, "descanso-largo", buttonLargo);

});

function changeContext(seconds, context, button) {

    remainingTimeInSeconds = seconds;
    changeButtonContent();
    textButtonPLayPause.textContent = "Comenzar";
    whenTheContextChange(context);
    button.classList.add("active");
    stopTime();

};

function whenTheContextChange(context) {

    showScreenTime();

    buttons.forEach(function (context) {

        context.classList.remove("active");

    });

    html.setAttribute("data-contexto", context);
    banner.setAttribute("src", `/imagenes/${context}.png`);

    switch (context) {
        case "enfoque":
            title.innerHTML = `
            Optimiza tu productividad,<br>
                <strong class="app__title-strong">Sumérgete en lo que importa.</strong>
            `;
            break;
        case "descanso-corto":
            title.innerHTML = `
            ¿Qué tal tomar un respiro?,<br>
                <strong class="app__title-strong">¡Haz una pausa corta.</strong>
            `;
            break;
        case "descanso-largo":
            title.innerHTML = `
            Hora de volver a la superficie,<br>
                <strong class="app__title-strong">Haz una pausa larga.</strong>
            `;
            break;
        default:
            break;
    };

};

function showScreenTime() {

    const time = new Date(remainingTimeInSeconds * 1000);
    const formatedTime = time.toLocaleTimeString('es-MX', {
        minute: '2-digit',
        second: '2-digit'
    });
    screenTime.innerHTML = `${formatedTime}`;

};

const changeButtonContent = () => {
    textButtonPLayPause.textContent = (remainingTimeInSeconds <= 0) ? "Comenzar" : "Reanudar";
    imgButtonPlayPause.setAttribute("src", `/imagenes/play_arrow.png`);
}

function stopTime() {

    clearInterval(idInterval);
    idInterval = null;

};

buttonPlayPause.addEventListener("click", startPause);

function startPause() {

    if (idInterval) {
        soundPause.play();
        stopTime();
        changeButtonContent();
        return;
    };
    soundPlay.play();
    idInterval = setInterval(coutdown, 1000);

};

const coutdown = () => {

    if (remainingTimeInSeconds <= 0) {
        soundfinishedTime.play();
        stopTime();
        changeButtonContent();
        remainingTimeInSeconds = 5;
        showScreenTime();
        return;
    }
    textButtonPLayPause.textContent = "Pausar";
    imgButtonPlayPause.setAttribute("src", `/imagenes/pause.png`);
    remainingTimeInSeconds -= 1;
    showScreenTime();

};

showScreenTime();