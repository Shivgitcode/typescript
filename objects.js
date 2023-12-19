"use strict";
// function printName(person: { first: string; last: string }) {
//   console.log(`${person.first} ${person.last}`);
// }
// printName({ first: "thomas", last: "Jenkins" });
// let coordinate: { x: number; y: number } = { x: 34, y: 5 };
// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }
function printName(person) {
    return `${person.first} ${person.last}`;
}
printName({ first: "Mick", last: "Jagger", age: 433 }); //typescript catches an error here that only defined values will be given to the funciton
const singer = { first: "Mick", last: "Jagger", age: 433 };
printName(singer); //here typescript do not gives any error
// type Point = {
//   x: number;
//   y: number;
// };
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log(`${song.title}-${song.artist}`);
}
const mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    },
};
const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
const myPoint = { x: 1, y: 3 };
console.log(myPoint);
const user = {
    id: 12837,
    username: "catgurl",
};
console.log(user.id);
const happyFace = {
    radius: 4,
    color: "yellow",
};
const christy = {
    numLives: 7,
    breed: "Husky",
    age: 9,
};
