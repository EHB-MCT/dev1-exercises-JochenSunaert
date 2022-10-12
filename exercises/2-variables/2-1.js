"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');



let y=50;


function drawLines(margin) {

    context.beginPath();
    context.moveTo(margin, y);
    context.lineTo(canvas.width - margin, y);
    context.lineTo(margin, y + 50);
    context.lineTo(canvas.width - margin, y + 50);
    context.lineTo(margin, y + 100);
    context.lineTo(canvas.width - margin, y + 100);
    context.lineTo(margin, y + 150);
    context.lineTo(canvas.width - margin, y + 150);
    context.lineTo(margin, y + 200);
    context.lineTo(canvas.width - margin, y + 200);
    context.lineTo(margin, y + 250);
    context.lineTo(canvas.width - margin, y + 250);
    context.lineTo(margin, y);

    context.strokeStyle = "black";
    context.stroke();
}

drawLines(500);

console.log(context.canvas);