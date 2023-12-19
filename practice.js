"use strict";
let name2 = "shivansh";
let year = 4;
let isTrue = true;
let yo = "shivansh";
let yo2 = 4;
// yo2="apple"
// yo=4;
// isTrue=false
// isTrue="false"
// year=5
// name2=5
// funcitons
function sum(n1, n2) {
    return n1 + n2;
}
// sum(1,2)
function sum2(num = 2, num2 = 3) {
    return num + num2;
}
// sum2()
// sum2(1,2)
// function greet(name: string): void {
//   // return `Hi my name is ${name}`
//   console.log(`Hi my name is ${name}`);
// }
function suar(name) {
    while (true) {
        console.log("this is never return type function", name);
    }
}
const data = {
    x: 6,
    y: 5,
};
function apiData(dat) {
    return dat;
}
const user1 = {
    id: 234324,
    name: "shivansh",
    email: "shivneeraj2004@gmail.com",
};
const user2 = {
    id: 3343035,
    name: "Shiva",
    home: "ashirwad enclave",
    city: "Dehradun",
    email: "shivansh830.be22@chitkara.edu.in",
};
const user3 = {
    firstname: "shivansh",
    lastname: "aggarwal",
    id: 345334234,
    city: "dehradun",
};
// arrays type
// let cars:string[]=["ford","cheverlotte","audi","bmw","range rover"]
// function Cars(): string[] {
//   let car: string[] = [];
//   return car;
// }
// const car1 = Cars();
// car1.push("BMW");
// car1.length;
// multidimensional array
// const game:string[][]=[['X','O','X'],['X','O','X']]
// union types
let day = "Monday";
day = 3;
// day = true;
function Money(num) {
    // return num.replace("$","")
    // typenarrowing ka use karenge
    if (typeof num === "string") {
        return num.replace("$", "");
    }
    return num * 4;
}
function age(num) {
    if (typeof num === "string") {
        return num.charAt(0);
    }
    return `your age is ${num}.`;
}
age(30);
age("30");
// union types with arrays
let arr1 = ["shivansh", 30, "hello", 40];
arr1[2] = "world";
let arr2 = ["shivansh", "hello"];
arr2 = [30, 50];
let arr3 = [
    { name: "juhu", color: "white" },
    { model: "x5", year: 2023 },
];
let arr4 = [{ name: "jojo", color: "brown" }];
const myHoliday = "Tuesday";
function request(input) {
    return input;
}
console.log(request("yes"));
// tuple
let arr5 = [200, 300];
let arr6 = [200, "recieved"];
arr6 = [404, "error"];
// enum
var Controls;
(function (Controls) {
    Controls[Controls["up"] = 30] = "up";
    Controls[Controls["down"] = 31] = "down";
    Controls[Controls["right"] = 32] = "right";
    Controls[Controls["left"] = 33] = "left";
})(Controls || (Controls = {}));
let moveUp = Controls.up;
let moveDown = Controls.down;
