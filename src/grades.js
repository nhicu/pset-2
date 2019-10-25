const readlineSync = require("readline-sync");

const Homework = 0.15
const Quizzes = 0.35
const Tests = 0.50

const Threehw1 = readlineSync.question("\nEnter three homework grades.\n");
const Threehw2 = readlineSync.question("");
const Threehw3 = readlineSync.question("");

const Threeqz1 = readlineSync.question("\nEnter three quiz grades.\n");
const Threeqz2 = readlineSync.question("");
const Threeqz3 = readlineSync.question("");

const Threets1 = readlineSync.question("\nEnter three test grades.\n");
const Threets2 = readlineSync.question("");
const Threets3 = readlineSync.question("");


let Hwaverage = (Threehw1+Threehw2+Threehw3)/3;
let Qzaverage = (Threeqz1+Threeqz2+Threeqz3)/3;
let Tsaverage = (Threets1+Threets2+Threets3)/3;

let Hwscaled = Hwaverage*Homework;
let Qzscaled = Qzaverage*Quizzes;
let Tsscaled = Tsaverage*Tests;

let grade = Hwscaled + Qzscaled + Tsscaled;
console.log("\nYour marking period grade is " + grade +"%.\n");
