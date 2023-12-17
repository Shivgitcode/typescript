let name2: string = "shivansh";
let year: number = 4;
let isTrue: boolean = true;

let yo = "shivansh";
let yo2 = 4;
// yo2="apple"
// yo=4;

// isTrue=false
// isTrue="false"

// year=5

// name2=5

// funcitons

function sum(n1: number, n2: number) {
  return n1 + n2;
}

// sum(1,2)

function sum2(num: number = 2, num2: number = 3): number {
  return num + num2;
}
// sum2()

// sum2(1,2)

// function greet(name: string): void {
//   // return `Hi my name is ${name}`
//   console.log(`Hi my name is ${name}`);
// }

function suar(name: string): never {
  while (true) {
    console.log("this is never return type function", name);
  }
}

// object types

type Coordinate = {
  x: number;
  y: number;
  name?: {
    first: string;
    last: string;
  };
};

const data: Coordinate = {
  x: 6,
  y: 5,
};

function apiData(dat: Coordinate): Coordinate {
  return dat;
}

type Username = {
  readonly id: number;
  name: string;
  email?: string;
};

const user1: Username = {
  id: 234324,
  name: "shivansh",
  email: "shivneeraj2004@gmail.com",
};

// user1.id=2000

type Address = {
  home: string;
  city: string;
};

type UserDetailForm = Username & Address;

const user2: UserDetailForm = {
  id: 3343035,
  name: "Shiva",
  home: "ashirwad enclave",
  city: "Dehradun",
  email: "shivansh830.be22@chitkara.edu.in",
};

const user3: { firstname: string; lastname: string } & {
  id: number;
  city: string;
} = {
  firstname: "shivansh",
  lastname: "aggarwal",
  id: 345334234,
  city: "dehradun",
};

// arrays type

// let cars:string[]=["ford","cheverlotte","audi","bmw","range rover"]

function Cars(): string[] {
  let car: string[] = [];
  return car;
}

const car1 = Cars();

car1.push("BMW");
car1.length;
