const fs = require("fs");
function readInput() {
    const input = fs
        // .readFileSync("input.txt").toString().split(/\r?\n/);
        .readFileSync("input.txt").toString()
    return input;
}
let row = 0;
let tree = 0;
function makeGrid(value) {
    console.log(value)
    let grid = value.split(/\r?\n/s).map(line => line.split(''))
    console.log(grid.length)
    for (let column = 0; column < grid[0].length; column++) {

        if (row == grid.length - 1) {

            break;
        }

        let mod = column % 3;

        if (mod == 3) {
            row++;
            if (grid[row][column] == "#") {
                grid[row][column] = "X"
                tree++;
            } else {
                grid[row][column] = "O"

            }
        } else {

            row++;


            let remain = mod;
            console.log(remain)
            if (grid[row][remain] == "#") {
                grid[row][remain] = "X"
                tree++;
            } else {
                grid[row][remain] = "O"
            }

        }


    }
    console.log(tree)


}

makeGrid(readInput());



