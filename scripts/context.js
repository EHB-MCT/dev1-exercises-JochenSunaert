"use strict";

/**
 * @type {CanvasRenderingContext2D}
 */

let context;

//canvas grootte van window geven
setupContext();

export default context;

function setupContext() {
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');
}