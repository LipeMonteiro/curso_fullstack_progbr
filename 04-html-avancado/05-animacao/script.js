let player = document.querySelector('.player');

let xInicial = 0;
let yInicial = 0;

function moverPlayer (x, y) {
    let posX = x + "px";
    let posY = y + "px";

    player.style.top = posX;
    player.style.left = posY;
}

setInterval(function () {
    moverPlayer (xInicial++, yInicial++);
}, 30)