"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = changeColor;

let frameCount = 0;

let mousehue = 0;


update();

function update(){

    if(frameCount % 30 == 0){

        /*console.log(frameCount);*/
        var x = Utils.randomNumber(0, width);
        var y = Utils.randomNumber(0, height);
        var size2 = Utils.randomNumber(10, 100)
        var hue = Utils.randomNumber(0, 240)

        drawBubble(x , y , size2, mousehue);


    }else{
        //console.log('dont');
    }
    frameCount++;
    requestAnimationFrame(update/*functienaam*/ );

}

/*drawBubbles();*/
/*function drawBubbles(){
    for( let i=0; i<100; i++){
        var x = Utils.randomNumber(0, width);
        var y = Utils.randomNumber(0, height);
        var size2 = Utils.randomNumber(10, 100)
        var hue = Utils.randomNumber(0, 240)

        drawBubble(x , y , size2, hue);
    }
}*/


function drawBubble(x, y, size, hue){
    context.fillStyle = Utils.hsl(hue,50,50);
    Utils.fillCircle(x,y, size);
    context.fillStyle = Utils.hsl(hue,50,75);
    Utils.fillCircle(x + size/3 , y- size/3, size/4);
}

/**
 * 
 * @param {MouseEvent} eventData 
 */

function changeColor(eventData  ) {
    console.log(eventData.pageX);
    mousehue = eventData.pageX /width * 360;
}