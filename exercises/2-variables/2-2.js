"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let y=50;

function drawsquares(x,y, size) {
    context.beginPath();
    context.rect(x, y, size, size);;
    context.fillStyle="#"+ Math.floor(Math.random() * 999999);
    context.fill();
}

drawsquares(0,0, 700);
drawsquares(50,50, 600);
drawsquares(100,100, 500);
drawsquares( 150, 150, 400);
drawsquares( 200, 200, 300);
drawsquares( 250, 250, 200);
drawsquares( 300, 300, 100);