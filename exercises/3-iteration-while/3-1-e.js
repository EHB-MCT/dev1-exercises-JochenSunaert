"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;

    while (i <= 6) {
        Utils.drawLine(/*x1*/ 200 + 25 *i , /*y1*/ 50 + 25*i, /*x2*/ 50 + 25*i, /*y2*/200+ 25*i);
        Utils.drawLine(/*x1*/  50 +25*i, /*y1*/ 200 -i*25 , /*x2*/ 200 + 25*i, /*y2*/ 350 -i*25);
        i++;

    }
}

drawDiagonalGrid();