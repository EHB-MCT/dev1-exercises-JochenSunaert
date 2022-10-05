"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');


function drawRectangles() {
    //rectangle1
    context.beginPath();
    context.rect(50, 50, 150, 150);
    context.strokeStyle = "red";
    context.stroke();

    //rectangle2
    context.beginPath();
    context.rect(200, 200, 150, 150);
    context.strokeStyle = "red";
    context.stroke();

    //rectangle3 middle
    context.beginPath();
    context.fillRect(125, 125, 150, 150);
    context.fillStyle = "#FF0000";
    context.stroke();

    //rect4 left
    context.beginPath();
    context.rect(75, 275, 50, 50);
    context.strokeStyle = "red";
    context.stroke();

    //rect5 left
    context.beginPath();
    context.rect(50, 325, 25, 25);
    context.strokeStyle = "red";
    context.fillStyle = 'black';
    context.stroke();
    context.fill();

    //rect6 left
    context.beginPath();
    context.rect(275, 75, 50, 50);
    context.strokeStyle = "red";
    context.stroke();

    //rect7 left
    context.beginPath();
    context.rect(325, 50, 25, 25);
    context.strokeStyle = "red";
    context.fillStyle = 'black';
    context.stroke();
    context.fill();
}

drawRectangles();