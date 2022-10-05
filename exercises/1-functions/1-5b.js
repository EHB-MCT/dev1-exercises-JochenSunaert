"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');


function drawSunset() {
    //orangerectangle
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.lineWidth=3;
    context.fillStyle="orange"
    context.fill();

    //bluerectangle
    context.beginPath();
    context.rect(50, 250, 300, 100);
    context.lineWidth=3;
    context.fillStyle="blue"
    context.fill();

    //circle

    context.beginPath();
    context.ellipse(200, 250, 100, 50, 0, 0, 1 * Math.PI, true);
    context.fillStyle="yellow";
    context.fill();
}

drawSunset();