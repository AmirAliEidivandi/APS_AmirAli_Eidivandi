const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const seconds = document.querySelector("#seconds");

let setClock = setInterval(function clock() {
    let dataNow = new Date();
    let hr = dataNow.getHours();
    let min = dataNow.getMinutes();
    let sec = dataNow.getSeconds();

    let calcHr = hr * 30 + min / 2;
    let calcMin = min * 6 + sec / 10;
    let calcSec = sec * 6;

    hour.style.transform = `rotate(${calcHr}deg)`;
    minute.style.transform = `rotate(${calcMin}deg)`;
    seconds.style.transform = `rotate(${calcSec}deg)`;
}, 1000);
