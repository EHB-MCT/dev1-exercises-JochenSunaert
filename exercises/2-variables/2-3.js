"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let y=50;

function drawPattern(x,y, size) {
    context.beginPath();
    context.rect(x, y, size, size);;
    context.fillStyle="rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) +")"
    context.fill();
}

drawPattern();