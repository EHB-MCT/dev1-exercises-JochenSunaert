"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


drawBubbles();



function drawBubbles() {

 let width = context.canvas.width - 400;
 let height = context.canvas.height - 400;

let backgroundx = window.innerWidth;
let backgroundy = window.innerHeight;


context.fillStyle='black ';
context.fillRect(0, 0, backgroundx, backgroundy);


    for(let i = 0; i < 120; i++) {


        let size = Math.floor(Math.random() *50);
        let x = Math.floor(Math.random() *width) + 200;
        let y = Math.floor(Math.random() *height) + 200;

        let h= Math.floor(Math.random() * 180);
        let s= 100;
        let l = Math.floor(Math.random() * 50);
        let a = 0.5;
        let color= "hsla("+ h + "," + s + "%," + l + "%," + a + ")";

        context.fillStyle= color;

        Utils.fillCircle(x,y, size)

    }


}