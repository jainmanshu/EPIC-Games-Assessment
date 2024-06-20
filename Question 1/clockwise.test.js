const clockwise = require("./clockwise");

test("clockwise traversal of matrix with empty column", () => {
  const input = [];
  const output = "";
  expect(clockwise(input)).toBe(output);
});

test("clockwise traversal of matrix with empty rows", () => {
  const input = [[]];
  const output = "";
  expect(clockwise(input)).toBe(output);
});

test("clockwise traversal of 1x1 matrix", () => {
  const input = [[1]];
  const output = "1";
  expect(clockwise(input)).toBe(output);
});

test("clockwise traversal of 1x3 matrix", () => {
  const input = [[1, 2, 3]];
  const output = "1, 2, 3";
  expect(clockwise(input)).toBe(output);
});

test("clockwise traversal of 2x2 matrix", () => {
  const input = [
    [1, 2],
    [3, 4],
  ];
  const output = "1, 2, 4, 3";
  expect(clockwise(input)).toBe(output);
});

test("clockwise traversal of 3x3 matrix", () => {
  const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const output = "1, 2, 3, 6, 9, 8, 7, 4, 5";
  expect(clockwise(input)).toBe(output);
});

test("clockwise traversal of 3x4 matrix", () => {
  const input = [
    [2, 3, 4, 8],
    [5, 7, 9, 12],
    [1, 0, 6, 10],
  ];
  const output = "2, 3, 4, 8, 12, 10, 6, 0, 1, 5, 7, 9";
  expect(clockwise(input)).toBe(output);
});

test("clockwise traversal of 3x1 matrix", () => {
  const input = [[1], [2], [3]];
  const output = "1, 2, 3";
  expect(clockwise(input)).toBe(output);
});
