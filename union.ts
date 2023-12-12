let age: number | string = 21;
age = 23;
age = "24";

type Point3 = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point3 | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    // price.replace("$","")
    price = parseFloat(price.replace("$", ""));
  } else {
    price * tax;
  }
}

// const stuff:any[]=[1,2,3,4,true]

const stuff: (number | string)[] = [1, 23, 4, 5, 6, "das"];

const coords: (Point3 | Loc)[] = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 213, y: 43 });
