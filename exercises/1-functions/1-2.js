"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');


function drawSquare(){
    //square
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(200, 50);
    context.lineTo(200, 200);
    context.lineTo(50, 200);
    context.lineTo(50,50)

    context.strokeStyle = "black";
    context.stroke();

    //cross
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(200, 200);
    context.moveTo(200, 50);
    context.lineTo(50,200);
    context.strokeStyle = "red";
    context.stroke();
}

drawSquare();