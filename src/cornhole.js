const readlineSync = require("readline-sync");

let l = 48;
let w = 24;
let d = 6;

let area = l*w;
let circlearea = .25*Math.PI*6*6;
let total = area - circlearea;
let newtotal = total.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nThe surface area of a standard Cornhole board is " + newtotal + " square inch(es).\n");
