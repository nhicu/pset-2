const readlineSync = require("readline-sync");

const Homework = 0.15;
const Quizzes = 0.35;
const Tests = 0.50;

const Threehw1 = Number(readlineSync.question("\nEnter three homework grades.\n"));
const Threehw2 = Number(readlineSync.question());
const Threehw3 = Number(readlineSync.question());

const Threeqz1 = Number(readlineSync.question("\nEnter three quiz grades.\n"));
const Threeqz2 = Number(readlineSync.question());
const Threeqz3 = Number(readlineSync.question());

const Threets1 = Number(readlineSync.question("\nEnter three test grades.\n"));
const Threets2 = Number(readlineSync.question());
const Threets3 = Number(readlineSync.question());

let hwaverage = (Threehw1+Threehw2+Threehw3)/3;
let qzaverage = (Threeqz1+Threeqz2+Threeqz3)/3;
let tsaverage = (Threets1+Threets2+Threets3)/3;

let hwscaled = hwaverage*Homework;
let qzscaled = qzaverage*Quizzes;
let tsscaled = tsaverage*Tests;
let g = hwscaled + qzscaled + tsscaled;
let total = g.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nYour marking period grade is " + total +"%.\n");
