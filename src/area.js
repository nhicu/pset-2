const readlineSync = require("readline-sync");

const Width = readlineSync.question("\nWidth: ");
const Length = readlineSync.question("Length: ");
const Conversion = 25.4;

let w = Width;
let l = Length;
let c = Conversion;
let g = (w*c)*(l*c);
let area = g.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + w + "-by-" + l +"-inch sheet of paper has an area of " + area + " square millimeters(s).\n");
