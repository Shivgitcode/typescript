const activeUsers: string[] = ["colt"];
activeUsers.push("Tony");

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;
// ageList[0] = "asd";

// boolean;

// const bools: Array<boolean> = [];

// bools.push(true);

type Point2 = {
  x: number;
  y: number;
};

const coords: Point2[] = [];
coords.push({ x: 23, y: 25 });
// coords.push({x:23,y:"8"})

const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const demo: number[][][] = [[[1]]];
