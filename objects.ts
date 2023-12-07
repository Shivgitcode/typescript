// function printName(person: { first: string; last: string }) {
//   console.log(`${person.first} ${person.last}`);
// }

// printName({ first: "thomas", last: "Jenkins" });

let coordinate: { x: number; y: number } = { x: 34, y: 5 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}
