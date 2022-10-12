"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let y=50;

function drawPattern(x , y, sizeX, sizeY, color) {
    context.beginPath();
    context.rect(x, y, sizeX, sizeY);;
    context.fillStyle= color;
    context.fill();
}

drawPattern(100, 100, 200, 100, "darkblue");
drawPattern(300, 100, 200, 100, "grey");
drawPattern(500, 100, 200, 100, "darkblue");
drawPattern(100, 200, 600, 200, "red");
drawPattern(100, 400, 200, 100, "darkblue");
drawPattern(300, 400, 200, 300, "grey");
drawPattern(500, 400, 200, 100, "darkblue");
drawPattern(100, 500, 200, 200, "lightblue");
drawPattern(500, 500, 200, 200, "lightblue");
