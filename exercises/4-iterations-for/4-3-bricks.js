"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


drawBricks();


function drawBricks() {

    let height = 50;
    let width = 100;
    

        for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    let evenSpace = (i%2)*50;  
                    let margin = 50;
                    context.fillStyle = '#8b0000';
                    context.fillRect( (50 + evenSpace) + (j*105) , i*55 + 50, width, height);
            }
    }
}