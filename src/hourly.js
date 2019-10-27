const readlineSync = require("readline-sync");
const Wage = Number(readlineSync.question("\nHourly wage: "));
const Monday = Number(readlineSync.question("\nMonday: "));
const Tuesday = Number(readlineSync.question("Tuesday: "));
const Wednesday = Number(readlineSync.question("Wednesday: "));
const Thursday = Number(readlineSync.question("Thursday: "));
const Friday = Number(readlineSync.question("Friday: "));
const Saturday = Number(readlineSync.question("Saturday: "));
const Sunday = Number(readlineSync.question("Sunday: "));

let w = (Wage*Monday) + (Wage*Tuesday) + (Wage*Wednesday) + (Wage*Thursday) + (Wage*Friday) + (Wage*Saturday) + (Wage*Sunday);
let total = w.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nYou'll make $" + total + " this week.\n");
