// this is typeAlias

// type Point={
//     x:number,
//     y:number,

// }

// const pt:Point={x:5435,y:23454}

// interface

interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 1234 };

// interface Person {
//   readonly id: number;
//   first: string;
//   last: string;
//   nickname?: string;
//   //   sayHi: () => string;
//   sayHi(): string;
// }

// const thomas: Person = {
//   id: 3254,
//   first: "Thomas",
//   last: "Hardy",
//   nickname: "Tom",
//   sayHi: () => {
//     return "Hello!";
//   },
// };

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Autralian Shepherd",
  bark() {
    return "WOOF WOOF!";
  },
};

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "lab",
  bark() {
    return "Bark!";
  },
  job: "guide dog",
};

interface Person {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Person, Employee {
  level: string;
  languages: string[];
}

const peirre: Engineer = {
  name: "Pierre",
  id: 12387,
  email: "peirre@gmail.com",
  level: "seniou",
  languages: ["html", "css", "javascript"],
};

// interfaces are only for objects
// types cannot be reopened
