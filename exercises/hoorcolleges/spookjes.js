"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

setup();

let x = [];
let y;
let size;

function setup() {

    x = width / 2;
    y = height;
    size = 50;

    update();
}

function update() {
    context.fillStyle ="white";
    context.fillrect(x, y, width, height);

    y=-10;

    drawBubble(x,y,size, 180);

    requestAnimationFrame(update);
}

function drawBubble(x,y,size, hue){
    context.fillStyle= Utils.hsl(hue,50,50);
    Utils.fillCircle = red;
}