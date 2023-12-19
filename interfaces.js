"use strict";
// this is typeAlias
const pt = { x: 123, y: 1234 };
const shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    },
};
console.log(shoes.applyDiscount(0.4));
const elton = {
    name: "Elton",
    age: 0.5,
    breed: "Autralian Shepherd",
    bark() {
        return "WOOF WOOF!";
    },
};
const chewy = {
    name: "Chewy",
    age: 4.5,
    breed: "lab",
    bark() {
        return "Bark!";
    },
    job: "guide dog",
};
const peirre = {
    name: "Pierre",
    id: 12387,
    email: "peirre@gmail.com",
    level: "seniou",
    languages: ["html", "css", "javascript"],
};
// interfaces are only for objects
// types cannot be reopened
