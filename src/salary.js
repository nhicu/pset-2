const readlineSync = require("readline-sync");
const Pre = 0.07
const Federal = 0.157
const State = 0.0447
const Social = 0.062
const Medi = 0.0145
const Annual = Number(readlineSync.question("\nAnnual Salary: "));
let atax = Annual/24
let btax = atax - (atax*Pre)
let ctax = Federal + State + Social + Medi
let dtax = btax*ctax
let etax = btax-dtax
let total = etax.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nYou're take-home  pay each check will be $" + total + ".\n");
