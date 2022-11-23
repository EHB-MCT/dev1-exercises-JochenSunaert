"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let frameCount = 0;
let xPos = 50;

let ismovingright = true;

let lastFrameTime = 0;

drawMovingcircle();

function drawMovingcircle(currentTime){
    //wit maken 
    context.fillStyle = 'white';
    // rectangle achter cirkel
    context.fillRect(0,0, width, height);
    //xPos++;
    // xPos ++ voor naar rechts loopen
    frameCount++;
    //console.log( 1/((currentTime - lastFrameTime) / 1000)); //hz van pc. (zonder /1 / 1000 is het milliseconden dat alles ingeladen word)
    lastFrameTime = currentTime;
    //console.log(frameCount);
    //cirkel kleur
    context.fillStyle='black';
    //maak cirkel
    Utils.fillCircle(xPos/* /tijd */, 50, 50);
    //bewegen van cirkel, gaat tegen 60 fps!
    requestAnimationFrame(drawMovingcircle);


    if(ismovingright){
        xPos += 2;
    }else{
        xPos -= 2;
    }

    if( xPos >= width -50 || xPos <=0 +50){
        ismovingright = !ismovingright;
    }

   /* 
    //loopen
   if(xPos > width){
        xPos = 0;
    }*/

    console.log(xPos)
}

