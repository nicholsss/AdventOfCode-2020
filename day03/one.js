const fs = require("fs");
function readInput() {
  const input = fs.readFileSync("input.txt").toString();
  return input;
}
function makeGrid(value) {
  console.log(value);
  let grid = value.split(/\r?\n/s).map((line) => line.split(""));
  return grid;
}

function checkTrees(right, down, grid) {
  let row = 0;
  let tree = 0;
  let col = 0;
  console.log(right);
  while (row < 323) {
    if (grid[row][col] == "#") {
      tree++;
    }

    col = (col + right) % 31;
    row += down;
  }
  console.log("Trees found", tree);
  return tree;
}
let grid = makeGrid(readInput());
let trees = checkTrees(1, 1, grid);
trees *= checkTrees(3, 1, grid);
trees *= checkTrees(5, 1, grid);
trees *= checkTrees(7, 1, grid);
trees *= checkTrees(1, 2, grid);
console.log("trees", trees);
