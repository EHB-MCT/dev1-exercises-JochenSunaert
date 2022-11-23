"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
window.onmousemove = drawCrossair;


context.fillStyle="black";
context.fillRect(0, 0, width, height);



/**
 * 
 * @param {MouseEvent} eventData 
 */



 function drawCrossair(eventData){
    context.fillStyle="white";
    context.fillRect(0, 0, width, height);

    let x= eventData.pageX;
    let y = eventData.pageY;

    context.strokeStyle = "red";
    Utils.drawLine( x , 0 , x , height)
    Utils.drawLine( 0 , y , width , y)

    context.lineWidth = 5;
}


