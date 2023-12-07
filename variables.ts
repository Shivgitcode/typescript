// string

// let movieTitle: string = "Amadeus";

// movieTitle = "arrival";
// movieTitle.toUpperCase();

// number

// let numCatLives: number = 9;
// numCatLives += 1;
// // numCatLives="zero"

// console.log(numCatLives);

// // boolean

// let gameOver: boolean = false;
// gameOver = true;
// // gameOver="true"

// any type

// let thing:any="hello";
// thing=1;
// thing=false;
// thing()
// thing.toUpperCase()

// let thing = "hello";
// thing();
// thing.fasfd()

const movies = ["Arrival", "The thing", "Aliens"];

// let foundMovie = false;
let foundMovie: string;

for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus";
  }
}

// foundMovie()
// foundMovie=1;
