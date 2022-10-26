"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontalLines = 60;
let verticalLines = 30;

let width = 600;
let height = 300;
drawLines();




function drawLines() {
    let stepH = width / horizontalLines;
    let stepV = height / verticalLines;

    
context.fillStyle='orange ';
context.fillRect(0, 0, width, height);

context.strokeStyle ="white";
context.lineWidth = '2'
    for(let i = 0; i <= verticalLines; i++) {
        Utils.drawLine(0   ,0 + (stepH * i), width , height - (stepH * i) );

    }

    for(let j = 0; j <= horizontalLines; j++) {
        Utils.drawLine(0 + (stepV * j)  ,0, width - (stepV * j) , height);
    }


}