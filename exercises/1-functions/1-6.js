"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');


function starryNight() {

    //square outside
    context.rect(50, 50, 300, 300);
    context.lineWidth=3;
    context.stroke();

    //lines
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(350, 350);
    context.moveTo(100, 50);
    context.lineTo(350, 300);
    context.moveTo(150, 50);
    context.lineTo(350, 250);
    context.moveTo(50, 100);
    context.lineTo(300, 350);
    context.moveTo(50, 150);
    context.lineTo(250, 350);
    context.strokeStyle='black'
    context.stroke();
}

starryNight();