"use strict";

import context from './context.js';


export function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();

}

export function strokeCircle(x, y, r) {
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI*2);
    context.stroke();
}

export function fillCircle(x, y, r) {
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI*2);
    context.fill();
}

export function rgb(r, g, b){
    let rgb = "rgb(" + r + "," + g + "," + b +")";
    return rgb;
}

export function rgba(r, g, b, a){
    let rgba = "rgba(" + r + "," + g + "," + b + ","+ a +")";
    return rgba;
}
export function hsla(h, s, l, a){
    let hsla = "hsla(" + h + "," + s + "," + l + ","+ a +")";
    return hsla;
}