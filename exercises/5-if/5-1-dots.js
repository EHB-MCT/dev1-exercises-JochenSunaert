"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


drawBubbles();



function drawBubbles() {

 let width = context.canvas.width;
 let height = context.canvas.height;





    for(let i = 0; i < 10000; i++) {


        let size = 2;
        let x = Math.floor(Math.random() *width);
        let y = Math.floor(Math.random() *height);




        if(x < width/3){

            context.fillStyle= "black";
        }else if(x< width/3*2){
            context.fillStyle= "yellow";
        }else{
            context.fillStyle= "red";
        }
        Utils.fillCircle(x,y, size)

    }


}