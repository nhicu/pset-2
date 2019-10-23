const readlineSync = require("readline-sync");
const Width = readlineSync.question("\nWidth: ");
const Length = readlineSync.question("Length: ");
let w = Width;
let l = Length;
let q = (w*w + l*l);
let p = Math.sqrt(q);
let diagonal = p.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nA(n) " + w + "-by-" + l +"-inch sheet of paper has a diagonal of " + diagonal + " inch(es).\n");
