const clockwise = require("./clockwise");

const input = [
  [2, 3, 4, 8],
  [5, 7, 9, 12],
  [1, 0, 6, 10],
];

console.log("\n Input");
console.log(input);

console.log("\nOutput");
console.log(clockwise(input)); // Output: "2, 3, 4, 8, 12, 10, 6, 0, 1, 5, 7, 9"
