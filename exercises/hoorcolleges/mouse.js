"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
window.onmousemove = drawMovingcircle;

var hue = 0;

context.fillStyle="black";
context.fillRect(0, 0, width, height);



/**
 * 
 * @param {MouseEvent} eventData 
 */




function drawMovingcircle(eventData){
    hue++
    context.fillStyle = Utils.hsl( hue, 100, 50);
    Utils.fillCircle( eventData.pageX , eventData.pageY, 50)

}


