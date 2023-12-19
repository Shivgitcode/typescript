"use strict";
let age = 21;
age = 23;
age = "24";
let coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };
function printAge(age) {
    console.log(`You are ${age} years old`);
}
function calculateTax(price, tax) {
    if (typeof price === "string") {
        // price.replace("$","")
        price = parseFloat(price.replace("$", ""));
    }
    else {
        price * tax;
    }
}
// const stuff:any[]=[1,2,3,4,true]
// const stuff: (number | string)[] = [1, 23, 4, 5, 6, "das"];
const coords = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 213, y: 43 });
// let zero:0=0;
let mood = "Happy";
mood = "Sad";
let today = "Monday";
