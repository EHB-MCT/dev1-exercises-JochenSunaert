"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

function drawsquares(x,y, size) {
    let r= Math.floor(Math.random() * 255);
    let g= Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color= "rgb("+ r + "," + g + "," + b +")";

    context.beginPath();
    context.rect(x, y, size, size);
    context.fillStyle= color;
    context.fill();
}

drawsquares(0,0, 700);
drawsquares(50,50, 600);
drawsquares(100,100, 500);
drawsquares( 150, 150, 400);
drawsquares( 200, 200, 300);
drawsquares( 250, 250, 200);
drawsquares( 300, 300, 100);