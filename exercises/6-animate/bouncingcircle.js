"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let frameCount = 0;
let xPos = 50;
let yPos = 50;

let ismovingright = true;
let ismovingup = true;
let lastFrameTime = 0;

//zelfde waarde te lui om aante passen
var speedX = 10;
var speedY = 10;


drawMovingcircle();

function drawMovingcircle(currentTime){
    //elke keer wit overwriten
    context.fillStyle = 'white';
    context.fillRect(0,0, width, height);
    //frametijd
    frameCount++ ;
    lastFrameTime = currentTime ;
    //Cirkel telkens tekenen
    context.fillStyle='blue';
    Utils.fillCircle(xPos, yPos, 50);
    //animatie loop
    requestAnimationFrame(drawMovingcircle);

    //boven en onder bewegen
    if(ismovingup){
        yPos += speedY;
    }else{
        yPos -= speedY;
    }
    //Als het de rand raakt
    if( yPos >= height -50 || yPos <=0 +50){
        ismovingup = !ismovingup;
    }
    //Rechts en links
    if(ismovingright){
        xPos += speedX;
    }else{
        xPos -= speedX;
    }
    //Als het de rand raakt
    if( xPos >= width -50 || xPos <=0 +50){
        ismovingright = !ismovingright;
    }



    //console.log(xPos)
}




window.onmousemove = stopcircle;
let mouseX= eventData.pageX;
let mouseY = eventData.pageY;

function stopcircle(){
    
    if( mouseX == xPos || mouseY == yPos){
        
    } 

}