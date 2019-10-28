const readlineSync = require("readline-sync");

const Width = readlineSync.question("\nWidth: ");
const Length = readlineSync.question("Length: ");
const Conversion = 2.54;

let w = Width;
let l = Length;
let c = Conversion;
let y = (2*w*c)+(2*l*c);
let perimeter = y.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + w + "-by-" + l +"-inch sheet of paper has a perimeter of " + perimeter + " centimeter(s).\n");
