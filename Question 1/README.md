# Clockwise Matrix Traversal

This folder contains a JavaScript function that traverses a given matrix in a clockwise order and returns a string of the matrix's elements separated by commas.

Run Time Complexity for this solution `O(M*N)` Where M and N are rows and cols repectively

Space complexity `O(N)` Where is N is total number of element in matrix.

## Approach

The function `clockwise(matrix)` takes a 2D array (matrix) as input and follows these steps:

1. **Initial Checks**:
   If the matrix is empty or contains empty subarrays, the function returns an empty string.

2. **Define Boundaries**:
   `left`, `right`, `top`, `bottom` boundaries are initialized to represent the edges of the matrix that haven't been traversed yet.

3. **Traversal Loop**:
   The function uses a `while` loop to traverse the matrix as long as there are elements left within the boundaries.

   It traverses the matrix in the following order:

   1. **Top Row**: From left to right.
   2. **Right Column**: From top to bottom.
   3. **Bottom Row**: From right to left (if still within bounds).
   4. **Left Column**: From bottom to top (if still within bounds).

   After each directional traversal, the corresponding boundary is adjusted inward.

4. **Join Results**:
   The elements collected during traversal are joined into a single string separated by commas and returned.

## How to Run the Solution

### Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager) installed.
- Run npm install to install jest related packages to run test (optional if required to run test file)

- ```sh
   npm install
  ```

### Files

- `clockwise.js`: Contains the `clockwise` function.
- `clockwise.test.js`: Contains Jest test cases to verify the correctness of the `clockwise` function.
- `sample_test.js`: Contains the sample file on how to use `clockwise` function to do a manual test.

### Running the Solution

1. **Execute the Function**:

   You can run the function directly by creating a separate script or file.

   Here is sample test

   ```sh
   npm run sample_test
   ```

   Example (check `sample_test.js` file for it's usage):

   ```js
   const clockwise = require("./clockwise");

   const input = [
     [2, 3, 4, 8],
     [5, 7, 9, 12],
     [1, 0, 6, 10],
   ];

   console.log(clockwise(input)); // Output: "2, 3, 4, 8, 12, 10, 6, 0, 1, 5, 7, 9"
   ```

2. **Run Test Cases**:

   The project uses Jest for testing. To run the test cases:

   ```sh
   npm test
   ```

   This command will execute all the test cases defined in `clockwise.test.js` to verify the correctness of the `clockwise` function.

### Test Cases

The following test cases are included in `clockwise.test.js`:

- **Empty matrix**: Tests an empty matrix with empty cols.
- **Matrix with empty rows**: Tests a matrix that contains empty rows.
- **1x1 matrix**: Tests a matrix with only one element.
- **1x3 matrix**: Tests a single-row matrix.
- **2x2 matrix**: Tests a smaller 2x2 matrix.
- **3x3 matrix**: Tests a standard 3x3 matrix.
- **3x4 matrix**: Tests a rectangular matrix with more columns than rows.
- **3x1 matrix**: Tests a single-column matrix.

## Conclusion

This project folder demonstrates a method to traverse a matrix in a clockwise order. The provided function and test cases ensure correctness and handle various edge cases, including empty matrices.
