"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');



function drawName(){
    //J
    context.beginPath();
    context.moveTo(20, 20);
    context.lineTo(70, 20);
    context.lineTo(70, 100);
    context.lineTo(20, 100);
    context.lineTo(20, 80);
    context.strokeStyle = "red";
    context.stroke();

    //O
    context.beginPath();
    context.moveTo(90, 20);
    context.lineTo(90, 100);
    context.lineTo(140, 100);
    context.lineTo(140, 20);
    context.lineTo(90,20);
    context.strokeStyle = "orange";
    context.stroke();
   
    //C
    context.beginPath();
    context.moveTo(200, 20);
    context.lineTo(150, 20);
    context.lineTo(150, 100);
    context.lineTo(200,100);
    context.strokeStyle = "green";
    context.stroke();

    //H
    context.beginPath();
    context.moveTo(220, 20);
    context.lineTo(220, 100);
    context.moveTo(270, 20);
    context.lineTo(270, 100);
    context.moveTo(270, 60);
    context.lineTo(220, 60);
    context.strokeStyle = "blue";
    context.stroke();

    //E
    context.beginPath();
    context.moveTo(310, 20);
    context.lineTo(310, 100);
    context.moveTo(310, 20);
    context.lineTo(360, 20);
    context.moveTo(310, 60);
    context.lineTo(340, 60);
    context.moveTo(310, 100);
    context.lineTo(360, 100);
    context.strokeStyle = "purple";
    context.stroke();

    //N
    context.beginPath();
    context.moveTo(380, 100);
    context.lineTo(380, 20);
    context.lineTo(430, 100);
    context.lineTo(430, 20);
    context.strokeStyle = "black";
    context.stroke();
}


drawName();