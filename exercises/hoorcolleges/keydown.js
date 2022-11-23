"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
window.onkeydown = drawMovingcircle;

var hue = 0;
let xpos= width / 2;
let ypos = height / 2;

context.fillStyle="black";
context.fillRect(0, 0, width, height);



/**
 * 
 * @param {KeyboardEvent} eventData 
 */




function drawMovingcircle(eventData){
    console.log(eventData.code)

    if(eventData.code == "ArrowUp"){
        ypos -= 10;
    }else if(eventData.code == "ArrowDown"){ 
        ypos +=10;

    }


    
    if(eventData.code == "ArrowLeft"){
        xpos -= 10;
    }else if(eventData.code == "ArrowRight"){ 
        xpos +=10;

    }
    
    hue++
    context.fillStyle = Utils.hsl( hue, 100, 50);
    Utils.fillCircle( eventData.pageX , eventData.pageY, 50)

}

