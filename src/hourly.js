const readlineSync = require("readline-sync");

const Wage = Number(readlineSync.question("\nHourly wage: "));
const Monday = Number(readlineSync.question("\nMonday: "));
const Tuesday = Number(readlineSync.question("Tuesday: "));
const Wednesday = Number(readlineSync.question("Wednesday: "));
const Thursday = Number(readlineSync.question("Thursday: "));
const Friday = Number(readlineSync.question("Friday: "));
const Saturday = Number(readlineSync.question("Saturday: "));
const Sunday = Number(readlineSync.question("Sunday: "));

let w = (Monday + Tuesday + Wednesday + Thursday + Friday + Saturday + Sunday)*Wage;
let total = w.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nYou'll make $" + total + " this week.\n");
