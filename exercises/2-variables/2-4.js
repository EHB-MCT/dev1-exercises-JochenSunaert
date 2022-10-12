"use strict";

//canvas.width 


let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let y=50;

function drawSunset() {
    context.beginPath();
    context.fillStyle = "goldenrod";
    context.fillRect(0, 0, canvas.width, canvas.height/4);
    context.fillStyle = "Darkorange";
    context.fillRect(0, canvas.height/4, canvas.width, canvas.height/4);
    context.fillStyle = "brown";
    context.fillRect(0, canvas.height/4*2, canvas.width, canvas.height/4);
    context.fillStyle = "darkblue";
    context.fillRect(0, canvas.height/4*3, canvas.width, canvas.height/4);
    context.fillStyle="LemonChiffon";
    context.arc( canvas.width/2, canvas.height/4*3, 400,  Math.PI , 2 * Math.PI, false);
    context.fill();


}

drawSunset();