"use strict";
const vpanel = document.getElementById("panel");
const vbtnDisparar = document.getElementById("btnDisparar");
const vbtnRafaga = document.getElementById("btnRafaga");
const vbtnRecargar = document.getElementById("btnRecargar");
const vbarra = document.getElementById("barra");

let balas = 100;

const actualizar = () => {
    vpanel.innerText = balas;
    vbarra.style.width = balas * 5 + "px";
};

actualizar();

vbtnDisparar.addEventListener("click", () => {
    if (balas > 0) {
        balas--;
        actualizar();
    }
});

vbtnRafaga.addEventListener("click", () => {
    balas -= 10;
    if (balas < 0) {
        balas = 0;
    }
    actualizar();
});

vbtnRecargar.addEventListener("click", () => {
    balas += 20;
    if (balas > 200) {
        balas = 200;
    }
    actualizar();
});

