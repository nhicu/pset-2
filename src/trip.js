const readlineSync = require("readline-sync");
const Students = Number(readlineSync.question("\nStudents: "));
const Teachers = Number(readlineSync.question("Teachers: "));
const Capacity = Number(readlineSync.question("Bus Capacity: "));
let totalrider = Students + Teachers;
let cars = totalrider/Capacity;
let totalcars = Math.ceil(cars);
let passengers = totalrider % Capacity;
console.log("\n" + totalcars + " bus(es) is(are) needed, with " + passengers + " passenger(s) on the last bus.\n");
