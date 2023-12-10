// function printName(person: { first: string; last: string }) {
//   console.log(`${person.first} ${person.last}`);
// }

// printName({ first: "thomas", last: "Jenkins" });

// let coordinate: { x: number; y: number } = { x: 34, y: 5 };

// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

function printName(person: { first: string; last: string }) {
  return `${person.first} ${person.last}`;
}

printName({ first: "Mick", last: "Jagger", age: 433 }); //typescript catches an error here that only defined values will be given to the funciton

const singer = { first: "Mick", last: "Jagger", age: 433 };
printName(singer); //here typescript do not gives any error

// type Point = {
//   x: number;
//   y: number;
// };

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title}-${song.artist}`);
}

const mySong: Song = {
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

type Point = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point = { x: 1, y: 3 };

console.log(myPoint);

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12837,
  username: "catgurl",
};

console.log(user.id);
// user.id = 2334353;

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9,
};
