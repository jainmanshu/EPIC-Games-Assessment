// Actual Code Solution
// The code explaination is provided in README.md file

const clockwiseMatrix = (matrix) => {
  // Handling empty Matrix
  // I am assuming that empty matrix will return empty "" string result.

  // Check either rows are empty or columns are empty
  if (matrix.length === 0 || matrix[0].length === 0) {
    return "";
  }

  // Determine the boundaries, we will use 4 variable pointers
  // left means left-most pointer, right means right-most pointer
  // top means top-most pointer, bottom is bottom-most pointer
  let left = 0;
  let right = matrix[0].length;
  let top = 0;
  let bottom = matrix.length;
  let result = [];

  // Simple approach just running simulation while there are still rows and cols to traverse
  while (left < right && top < bottom) {
    // Traverse the top row from left to right boundary.
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i].toString());
    }
    // Move top boundary by 1 down after traversal
    top++;

    // Traverse the right column from top to bottom boundary.
    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right - 1].toString());
    }
    // Move the right boundary by 1 left after traversal
    right--;

    // Make sure we are now on a different row or cols.
    // This is to handle the edge cases for handling rows or cols left to traverse
    if (!(left < right && top < bottom)) {
      break;
    }

    // Traverse the bottom row from right to left boundary.
    for (let i = right - 1; i >= left; i--) {
      result.push(matrix[bottom - 1][i].toString());
    }
    // Move bottom boundary by 1 up after traversal
    bottom--;

    // Traverse the left column from bottom to top boundary.
    for (let i = bottom - 1; i >= top; i--) {
      result.push(matrix[i][left].toString());
    }
    // Move left boundary by 1 right after traversal
    left++;
  }
  // join the result list into single string separated by commas
  return result.join(", ");
};
// export the solution to be used jest test
module.exports = clockwiseMatrix;
