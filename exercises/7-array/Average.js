"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


let nummersom = 0;

calculateAverage();

function calculateAverage(){
    var numberArray = new Array();

    for(let i=0; i<1000; i++){
        numberArray[i] = Utils.randomNumber(0, 100);
        nummersom += numberArray[i];
        var average = nummersom / numberArray.length;
    }

    console.log(average);
    console.log(numberArray);

}

