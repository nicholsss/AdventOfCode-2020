const fs = require("fs");
function readInput() {
    const input = fs
       // .readFileSync("input.txt").toString().split(/\r?\n/);
       .readFileSync("input.txt").toString()
    return input;
}

function makeGrid(value){
console.log(value)

let grid = value.split(/\r?\n/s).map(line => line.split(''))
console.log(grid[1][3])
}

makeGrid(readInput());
