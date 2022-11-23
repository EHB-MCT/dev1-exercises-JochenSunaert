"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

// de waarde op 0 zetten
let nummersom = 0;

//functie aanroepen
calculateAverage();


function calculateAverage(){
    //array aanmaken
    var numberArray = new Array();

    //for loop aanmaken voor de 1000 getallen in de array
    for(let i=0; i<1000; i++){
        //elke 1000 plaatsen in de array een random nummer tussen 0 en 100 geven
        numberArray[i] = Utils.randomNumber(0, 100);
        //elke 1000 random nummers bij elkaar optellen
        nummersom += numberArray[i];
        //De random nummers die samengeteld zijn delen door de lengte van de array (dus 1000)
        var average = nummersom / numberArray.length;
    }


    console.log(average);

}

